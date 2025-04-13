import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ShopDetails from "@/components/Shop/ShopDetails";

const ShopDetailPage = () => {
  return (
    <>
      <Breadcrumb title="Shop Details" />
      <ShopDetails />
    </>
  );
};

export default ShopDetailPage;
