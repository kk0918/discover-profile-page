export type Pages = {
  pages: ProfilePage[];
};

export type ProfilePage = {
  id: string;
  email: string;
  referralCode: string;
  category: string;
  pages: ProfileType[];
};

export type ProfileType = {
  id: string;
  displayName: string;
  shortUrl: string;
  profileImage: string;
  caption: string;
  slugName: string;
  share: boolean;
  createdAt: string;
  links: ProfilePageLink[];
  theme: ProfileTheme;
};

export type ProfilePageLink = {
  id: string;
  link: string;
  provider: string;
  title: string;
  thumbNailImgUrl: string;
  actionData: {
    link: string;
  };
};

export type ProfileTheme = {
  id: string;
  backgroundColor: string;
  profileImageShapeType: "circle" | "square";
};
