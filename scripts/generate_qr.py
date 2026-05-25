"""Generate a QR code for the program website with the logo centered."""

import base64
import html
import re
from io import BytesIO
from pathlib import Path

import qrcode
from PIL import Image
from qrcode.constants import ERROR_CORRECT_H

ROOT = Path(__file__).resolve().parents[1]
URL = "https://touradam.github.io/AI-Builder-Bootcamp/"
LOGO_SVG = ROOT / "assets" / "logo.svg"
OUTPUT = ROOT / "assets" / "qr-website.png"


def load_logo_from_svg(svg_path: Path) -> Image.Image:
    text = html.unescape(svg_path.read_text(encoding="utf-8"))
    marker = "data:image/png;base64,"
    start = text.find(marker)
    if start == -1:
        raise ValueError("No embedded PNG found in logo SVG")

    start += len(marker)
    end = text.find('"', start)
    raw = re.sub(r"\s+", "", text[start:end])
    return Image.open(BytesIO(base64.b64decode(raw))).convert("RGBA")


def main() -> None:
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,
        box_size=12,
        border=4,
    )
    qr.add_data(URL)
    qr.make(fit=True)

    qr_img = qr.make_image(fill_color="#0c0c0f", back_color="#ffffff").convert("RGBA")
    qr_size = qr_img.size[0]

    logo = load_logo_from_svg(LOGO_SVG)
    logo_max = int(qr_size * 0.22)
    logo.thumbnail((logo_max, logo_max), Image.Resampling.LANCZOS)

    pad = 12
    badge_size = (logo.size[0] + pad * 2, logo.size[1] + pad * 2)
    badge = Image.new("RGBA", badge_size, "#ffffff")
    badge_x = (badge_size[0] - logo.size[0]) // 2
    badge_y = (badge_size[1] - logo.size[1]) // 2
    badge.paste(logo, (badge_x, badge_y), logo)

    pos = ((qr_size - badge_size[0]) // 2, (qr_size - badge_size[1]) // 2)
    qr_img.paste(badge, pos, badge)

    qr_img.save(OUTPUT, format="PNG", optimize=True)
    print(f"Saved {OUTPUT} ({qr_size}x{qr_size}px)")


if __name__ == "__main__":
    main()
