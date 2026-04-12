export interface NavigationChildItem {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationChildItem[];
}
