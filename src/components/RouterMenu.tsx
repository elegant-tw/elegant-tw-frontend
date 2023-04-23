import { IconType } from "react-icons"
import { FaGithub } from "react-icons/fa"

type SectionItem = {
  label: string,
  path: string,
  Icon: IconType,
  external: boolean
}

type Section = {
  sectionId: string,
  sectionLabel: string,
  sectionItems: SectionItem[]
}
const exploreRouterMenu : Section[] = [
  {
    sectionId: "About",
    sectionLabel: "關於我們",
    sectionItems: [
      {
        label: "GitHub",
        path: "https://github.com/elegant-tw",
        Icon: FaGithub,
        external: true,
      }
    ]
  }
]
export default exploreRouterMenu;