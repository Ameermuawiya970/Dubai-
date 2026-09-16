export interface OrderFormData {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  quantity: number;
  packageTitle: string;
  notes: string;
}

export interface ProductPackage {
  id: string;
  quantity: number;
  title: string;
  urduTitle: string;
  price: number;
  originalPrice: number;
  deliveryText: string;
  isPopular?: boolean;
  savingsText?: string;
}
