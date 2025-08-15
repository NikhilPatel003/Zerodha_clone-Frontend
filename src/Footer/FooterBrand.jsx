import {
  X as XIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  WhatsApp as WhatsAppIcon,
  Telegram as TelegramIcon,
} from "@mui/icons-material";

const iconStyle = { color: "grey.600" };

export default function FooterBrand() {
  return (
    <>
      <img src="/media/Images/logo.svg" alt="logo" style={{ width: "50%",marginBottom : "1rem" }} />
      <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
      <p>All rights reserved.</p>

      <ul className="d-flex list-unstyled gap-3 mb-3">
        {[XIcon, FacebookIcon, InstagramIcon, LinkedInIcon].map((Icon, idx) => (
          <li key={idx}><a href=""><Icon sx={iconStyle} /></a></li>
        ))}
      </ul>

      <hr />

      <ul className="d-flex list-unstyled gap-3">
        {[YouTubeIcon, WhatsAppIcon, TelegramIcon].map((Icon, idx) => (
          <li key={idx}><a href=""><Icon sx={iconStyle} /></a></li>
        ))}
      </ul>
    </>
  );
}
