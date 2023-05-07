import { IconType } from "react-icons"
import { FaGithub, FaBookOpen } from "react-icons/fa"

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
    sectionLabel: "關於言雅",
    sectionItems: [
      {
        label: "說明文件",
        path: "https://docs.elegant.tw",
        Icon: FaBookOpen,
        external: true,
      },
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