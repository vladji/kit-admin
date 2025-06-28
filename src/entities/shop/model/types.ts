interface ShopCoverProps {
  image: string | null;
}

interface ShopOpenHoursProps {
  from: string | null;
  to: string | null;
}

interface ShopReadyTimeProps {
  min: string | null;
  max: string | null;
}

export interface ShopProps {
  uniqId: string;
  phone: string | null;
  name: string | null;
  cover: ShopCoverProps;
  openHours: ShopOpenHoursProps;
  readyTime: ShopReadyTimeProps;
  profileCompleted: boolean;
  hasMenu: boolean;
  onAir: boolean;
  rating?: number;
  menu_id?: string;
}

export interface ShopTableProps {
  id: string;
  uniqId: string;
  name: string | null;
  profileCompleted: string;
  hasMenu: string;
  onAir: string;
}
