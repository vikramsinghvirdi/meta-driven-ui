
export interface Page {
  id: string;
  name: string;
  description: string;
  version: string;
  theme: string;
  enableSidebar: boolean;
  vssPermissions: string[];
  sections: Section[];
}

export interface Section {
  items: Item[];
  order: number;
  classes: string;
  layoutId: string;
  layoutType: string;
}

export interface Item {
  order: number;
  widget: string;
  classes: string;
  vssPermissions: string[];
  settings: Settings;
}

export interface Settings {
  title: string;
  pagination?: boolean;
}
