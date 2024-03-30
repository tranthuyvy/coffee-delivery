import {
  HiOutlineViewGrid,
  HiOutlineShoppingCart,
  HiOutlineCube,
  HiOutlineUserGroup,
  HiOutlineServer,
  HiOutlineReceiptTax,
  HiOutlineLogin,
  HiOutlineCog,
}
  from "react-icons/hi";

export const DASHBOARD_SIDEBAR_TOP_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/admin',
    icon: <HiOutlineViewGrid />
  },
  {
    key: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: <HiOutlineCube />
  },
  {
    key: 'orders',
    label: 'Orders',
    path: '/admin/orders',
    icon: <HiOutlineShoppingCart />
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/admin/customers',
    icon: <HiOutlineUserGroup />
  },
  {
    key: 'category',
    label: 'Category',
    path: '/admin/category',
    icon: <HiOutlineServer />
  },
  {
    key: 'discount',
    label: 'Discount',
    path: '/admin/discount',
    icon: <HiOutlineReceiptTax />
  },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/admin/settings',
    icon: <HiOutlineCog />
  },
  {
    key: 'logout',
    label: 'Logout',
    path: '/admin/logout',
    icon: <HiOutlineLogin />
  },
]