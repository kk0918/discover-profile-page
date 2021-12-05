import { Pages, ProfilePage } from "./common/types";
import pages from "./mock/test";

// Add an API but make sure to follow the schema described in the mock
const mockDataEndpoint = "INSERT_DATA_ENDPOINT";

export async function getProfilePages(): Promise<Pages> {
  // const response = await fetch(mockDataEndpoint);
  // await response.json();
  return pages as any;
}

export async function getProfileBySlugName(
  slugName: string
): Promise<ProfilePage | null> {
  // Ideally separate endpoint to fetch by slugName but using same one to filter
  // const response = await fetch(mockDataEndpoint);
  const profilesJson = pages as any; // await response.json();

  const profilesBySlugName = profilesJson.pages.filter(
    (profile: ProfilePage) => {
      return profile.pages[0].slugName === slugName;
    }
  );

  if (profilesBySlugName.length === 0) {
    return null;
  }

  return profilesBySlugName[0];
}
