import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SocialMediaSite {
    name: string;
    url: string;
    icon: IconDefinition;
}

export interface SocialMediaData {
    socialMediaData: SocialMediaSite[];
}
