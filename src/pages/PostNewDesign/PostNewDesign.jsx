// PostNewDesign

import Layout from "../../components/layout/Layout";
import ShowCase from "../../components/PostDesign/ShowCase";
import DesignInfo from "../../components/PostDesign/DesignInfo";

import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/axios";
import { useLocation, useParams } from "react-router-dom";

const PostNewDesign = () => {
  const { slug } = useParams();
  let { state } = useLocation();

  const [product, setProduct] = useState();
  const firstFetch = () => {
    axiosInstance.get(`/api/v1/design/blank_product/${slug}/`).then((res) => {
      console.log(res?.data);
      setProduct(res?.data);
    });
  };
  useEffect(() => {
    firstFetch();
  }, []);

  return (
    <Layout>
      <div dir="rtl">
        <ShowCase product={product} />
        <DesignInfo state={state} product={product} />
      </div>
    </Layout>
  );
};

export default PostNewDesign;
