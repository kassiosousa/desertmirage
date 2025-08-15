export type LinkItem = {
  label: string
  href: string
  color: string
  leftIcon: string
  rightIcon: string
  external?: boolean
}

export const LINKS = [
  { label: "STEAM PAGE",            href: "https://store.steampowered.com/app/2833160/Desert_Mirage/?beta=1", color: "bg-ui-steam",   leftIcon: "gamepad", rightIcon: "steam"     },
  { label: "WATCH TRAILER",         href: "#", color: "bg-ui-trailer", leftIcon: "play",    rightIcon: "youtube"   },
  { label: "INSTAGRAM",             href: "https://www.instagram.com/opsgamestudio/", color: "bg-ui-social",  leftIcon: "link",    rightIcon: "instagram" },
  { label: "DISCORD COMMUNITY",     href: "https://discord.gg/PtzCEKqJb8", color: "bg-ui-discord", leftIcon: "chat",    rightIcon: "discord"   },
  { label: "GET PRESS KIT",         href: "https://desert.opsgamestudio.com", color: "bg-ui-press",   leftIcon: "download",rightIcon: "download"  },
  { label: "CONTACT",               href: "mailto:contato@opsgamestudio.com", color: "bg-ui-contact", leftIcon: "mail",    rightIcon: "mail"      },
]