import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaSite } from "../../types/socialMediaTypes";
import {
    faLinkedinIn,
    faGithub,
    faMedium,
    faInstagram,
    faImdb,
} from "@fortawesome/free-brands-svg-icons";

const sites: SocialMediaSite[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/angelogentileiii/",
        icon: faLinkedinIn,
    },
    {
        name: "Github",
        url: "https://github.com/angelogentileiii",
        icon: faGithub,
    },
    {
        name: "Medium",
        url: "https://angelogentileiii.medium.com/",
        icon: faMedium,
    },
    {
        name: "IMDB",
        url: "https://www.imdb.com/name/nm6910867/",
        icon: faImdb,
    },
    {
        name: "Instagram",
        url: "https://instagram.com/thiiirdphoto",
        icon: faInstagram,
    },
];

export const SocialMediaLinks: React.FC = () => {
    return (
        <div className="flex justify-around items-center">
            {sites.map((site: SocialMediaSite, index: number) => {
                return (
                    <a
                        key={index + site.name}
                        href={site.url}
                        target="_blank"
                        className="text-3xl text-gray-700 hover:text-amber-600 transition-colors duration-300"
                    >
                        <FontAwesomeIcon icon={site.icon} />
                    </a>
                );
            })}
        </div>
    );
};
