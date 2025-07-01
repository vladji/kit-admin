interface ShopRootProfileProps {
  rootPhone?: string;
}

interface ShopProfileProps {
  name: string | null;
  shopImage: string | null;
  rating: number | null;
  shopPhone?: string;
  openHours?: ShopOpenHoursProps;
  readyTime?: ShopReadyTimeProps;
}

interface ShopOpenHoursProps {
  from: string | null;
  to: string | null;
}

interface ShopReadyTimeProps {
  min: string | null;
  max: string | null;
}

interface ShopCredentialsProps {
  rootPass?: string;
  shopAdminPass: string;
}

export interface ShopProps {
  uniqId: string;
  rootProfile?: ShopRootProfileProps;
  shopProfile: ShopProfileProps;
  profileCompleted: boolean;
  hasMenu: boolean;
  enabled: boolean;
  published: boolean;
  credentials: ShopCredentialsProps;
}

export interface ShopTableProps {
  id: string;
  uniqId: string;
  name: string | null;
  profileCompleted: string;
  hasMenu: string;
  enabled: string;
  published: string;
}
