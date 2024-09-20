from pathlib import Path

from PIL import Image


def resize_with_background(input_image_path, output_image_path, target_size):
    """Resize an image while maintaining aspect ratio and centering it on a white background.

    Parameters
    ----------
    input_image_path : Path
        The path to the input image.
    output_image_path : Path
        The path to save the output image.
    target_size : tuple[int, int]
        The target size of the output image as a tuple (width, height) in pixels.
    """
    # Open the input image
    img = Image.open(input_image_path).convert("RGBA")  # Ensure the image has an alpha channel

    # Resize the image while maintaining aspect ratio
    img.thumbnail(target_size, Image.LANCZOS)

    # Create a white background of the target size
    background = Image.new(
        "RGBA", target_size, (255, 255, 255, 255)
    )  # White background with no transparency

    # Calculate the position to center the resized image on the background
    img_w, img_h = img.size
    bg_w, bg_h = background.size
    offset = ((bg_w - img_w) // 2, (bg_h - img_h) // 2)

    # Paste the resized image onto the white background
    background.paste(img, offset, mask=img)  # Use the image's transparency as a mask

    # Convert the image to RGB to remove the alpha channel (no transparency)
    background = background.convert("RGB")

    # Save the result to the output path
    background.save(output_image_path)


def main():
    """Resize all images in the current directory to 640x480 pixels."""
    # Process all images
    image_dir = Path(__file__).parent.absolute()

    for image in image_dir.glob("*.png"):
        target_size = (640, 480)
        resize_with_background(image, image, target_size)


if __name__ == "__main__":
    main()
