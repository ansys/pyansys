"""Script for automatic generation/download of sitemaps for pyansys projects.

Intended for the pyansys project and to be used with the update-gh-pages
workflow.

"""

from pathlib import Path
from xml.dom import minidom
import xml.etree.ElementTree as ET

from links import LINKS
import requests


def download_file(url: str, dest_path: Path) -> None:
    """Given a sitemap url, this function downloads the file into (dest_path).

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
    response = requests.get(url, stream=True, timeout=30)

    # Write the file content to the specified location
    with dest_path.open(mode="w", encoding="utf-8") as file:
        file.write(response.text)


def extract_urls_and_headers(links_dict: dict) -> tuple:
    """Extract valid project names and sitemap urls from metadata dictionary.

    Parameters
    ----------
    links_dict : dict
        Dictionary containing metadata of projects

    Returns
    -------
    tuple
        Contains the list of project names and the list of sitemap urls
    """
    valid_project_names = []
    valid_urls = []
    for project_name, url in links_dict.items():
        # The form of url is "https://subdomain.docs.pyansys.com/version/stable
        # where subdomain may contain nested subdomains depending on the project
        # see links.py from which LINKS was imported for examples
        if url is None:
            continue
        # url is changed to "https://subdomain.docs.pyansys.com/sitemap.xml
        # this is general form of the link to the sitemap file of each project
        updated_url = url.split("docs.pyansys.com")[0] + "docs.pyansys.com/sitemap.xml"
        if requests.get(url).status_code == 404:
            continue
        else:
            valid_project_names.append(project_name)
            valid_urls.append(updated_url)

    return valid_project_names, valid_urls


def generate_sitemap_index(project_names: list, dest_path: Path) -> None:
    """Generate the global sitemap file which will point to all other sitemaps.

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
    rough_string = ET.tostring(sitemap_index, "utf-8")
    reparsed = minidom.parseString(rough_string)
    pretty_xml = reparsed.toprettyxml(indent="  ")

    # Create the tree and write to XML file
    with dest_path.open(mode="w", encoding="utf-8") as file:
        file.write(pretty_xml)


if __name__ == "__main__":
    # Create path
    folder_path = Path() / "sitemaps"
    folder_path.mkdir(parents=True, exist_ok=True)

    # Get actual valid URLS and corresponding project names
    project_names, project_urls = extract_urls_and_headers(LINKS)

    # Generate global sitemap file
    file_path = folder_path / "globalsitemap.xml"
    generate_sitemap_index(project_names, file_path)

    for ith_url, url in enumerate(project_urls):
        file_path = folder_path / (project_names[ith_url] + "_sitemap.xml")
        download_file(url, file_path)
