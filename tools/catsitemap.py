from pathlib import Path
import xml.etree.ElementTree as ET
import requests
from xml.dom import minidom
from links import LINKS

def download_file(url: str, dest_path: Path) -> None:
    """Given the url of a sitemap file, this function downloads the file into destination
       path (dest_path)

    Parameters
    ----------
    url : str
        The url of the sitemap file to be downloaded
    dest_path : Path
        The destination path to save the downloaded file

    Raises
    ------
    requests.exceptions.Timeout
        Raises this exception when accessing a link takes too long
    """

    # Send the request
    try:
        response = requests.get(url, stream=True, timeout=30)
    except requests.exceptions.Timeout as e:
        print(f"Timed out while trying to get download the sitemap at this url: {url}")
        raise e

    # Write the file content to the specified location
    with open(dest_path, mode='wb') as file:
        for chunk in response.iter_content(chunk_size=8192):
            file.write(chunk)

def extract_urls_and_headers(links_dict: dict) -> tuple:
    """Processes the dictionary of project metadata, validates downloadable sitemaps, 
       returns valid lists of project names and sitemap urls in a tuple

    Parameters
    ----------
    links_dict : dict
        Dictionary containing metadata of projects

    Returns
    -------
    tuple
        contains the list of project names and the list of sitemap urls
    """

    valid_project_names = []
    valid_urls = []
    for project_name, url in links_dict.items():
        if url == None:
            continue
        updated_url = url.split("docs.pyansys.com")[0] + "docs.pyansys.com/sitemap.xml"
        if requests.get(url).status_code == 404:
            continue
        else:
            valid_project_names.append(project_name)
            valid_urls.append(updated_url)

    return valid_project_names, valid_urls


def generate_sitemap_index(project_names: list, dest_path: Path) -> None:
    """Generates the global sitemap file which will point to all other sitemaps

    Parameters
    ----------
    project_names : list
        List of project names with a downloadable sitemap file
    dest_path : Path
        The destination path to save the generated sitemap file
    """

    # Create the root element with namespace
    sitemap_index = ET.Element("sitemapindex", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")


    # Create sitemap elements for each URL
    for project in project_names:
        # Modify the url to point to the correct gh-pages directory
        modified_url = f"https://docs.pyansys.com/sitemap/{project}_sitemap.xml"

        sitemap = ET.SubElement(sitemap_index, "sitemap")
        loc = ET.SubElement(sitemap, "loc")
        loc.text = modified_url

    # Format XML with indentation
    rough_string = ET.tostring(sitemap_index, 'utf-8')
    reparsed = minidom.parseString(rough_string)
    pretty_xml = reparsed.toprettyxml(indent="  ")

    # Create the tree and write to XML file
    with open(dest_path, "w") as f:
        f.write(pretty_xml)


# Run the script
if __name__ == "__main__":
    # Create path
    folder_path = Path('.') / 'sitemaps'
    folder_path.mkdir()

    # Get actual valid URLS and corresponding project names
    project_names, project_urls = extract_urls_and_headers(LINKS)

    # Generate global sitemap file
    file_path = folder_path / "globalsitemap.xml"
    generate_sitemap_index(project_names, file_path)

    for index, url in enumerate(project_urls):
        file_path = folder_path / (project_names[index] + '_sitemap.xml')
        download_file(url, file_path)