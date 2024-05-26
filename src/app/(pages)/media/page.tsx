"use client";
import React from "react";
import MediaItem from "@/app/components/mediaitem/MediaItem";

// import { downloadImage } from "../utils/downloadImage"; //I'll create the downlaod function later by creating a download button component and usining that button here

// An array of images to display
const imageUrls = [
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521900/News%20Titan%20Gallery/_S4A7936_mq1j7e.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521910/News%20Titan%20Gallery/_S4A8028_uhgcir.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521899/News%20Titan%20Gallery/_S4A7948_qobgor.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521915/News%20Titan%20Gallery/_S4A7896_svfipv.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521906/News%20Titan%20Gallery/_S4A7983_sdhjrn.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521913/News%20Titan%20Gallery/_S4A7906_yraj11.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521906/News%20Titan%20Gallery/_S4A7985_lkerpm.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521906/News%20Titan%20Gallery/_S4A7983_sdhjrn.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521904/News%20Titan%20Gallery/_S4A7933_ohh6lx.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521903/News%20Titan%20Gallery/_S4A8131_qkgzdh.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521902/News%20Titan%20Gallery/_S4A8049_iwnvdx.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521900/News%20Titan%20Gallery/_S4A7937_gur3di.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521900/News%20Titan%20Gallery/_S4A7912_tqcknc.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521897/News%20Titan%20Gallery/_S4A7967_fofsrq.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521894/News%20Titan%20Gallery/_S4A8098_bekxhd.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521893/News%20Titan%20Gallery/_S4A8064_yvz16l.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521891/News%20Titan%20Gallery/_S4A8100_wnbprg.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521890/News%20Titan%20Gallery/_S4A8016_vchwq2.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521889/News%20Titan%20Gallery/_S4A7965_xuuvdu.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521887/News%20Titan%20Gallery/_S4A7957_ymolgq.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521887/News%20Titan%20Gallery/_S4A7979_x8piik.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521884/News%20Titan%20Gallery/_S4A7962_ysc694.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521883/News%20Titan%20Gallery/_S4A7976_rv7ord.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521882/News%20Titan%20Gallery/_S4A7961_y2xpwv.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521881/News%20Titan%20Gallery/_S4A8128_udqy3w.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521879/News%20Titan%20Gallery/_S4A7997_t5g7pe.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521876/News%20Titan%20Gallery/_S4A8093_acjcoc.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521875/News%20Titan%20Gallery/_S4A8075_eyohgh.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521874/News%20Titan%20Gallery/_S4A8041_mhn85w.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521874/News%20Titan%20Gallery/_S4A8125_jqavxu.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521873/News%20Titan%20Gallery/_S4A7974_ttful4.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521872/News%20Titan%20Gallery/_S4A7969_qbazdb.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521827/News%20Titan%20Gallery/_S4A8005_yywjcj.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521872/News%20Titan%20Gallery/_S4A7925_vne6ab.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521869/News%20Titan%20Gallery/_S4A7924_a7mb20.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521868/News%20Titan%20Gallery/_S4A8123_cmmzh9.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521867/News%20Titan%20Gallery/_S4A8035_y5tx1c.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521865/News%20Titan%20Gallery/_S4A7953_oyqbnw.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521863/News%20Titan%20Gallery/_S4A8113_hgkgjh.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521863/News%20Titan%20Gallery/_S4A8091_qa9ul0.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521863/News%20Titan%20Gallery/_S4A8045_haznb9.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521861/News%20Titan%20Gallery/_S4A8102_x9z2ox.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521861/News%20Titan%20Gallery/_S4A8021_ilvx3d.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521859/News%20Titan%20Gallery/_S4A8138_jgk80k.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521857/News%20Titan%20Gallery/_S4A8023_phpbjs.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521856/News%20Titan%20Gallery/_S4A7940_afmife.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521856/News%20Titan%20Gallery/_S4A8114_v7qw9q.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521853/News%20Titan%20Gallery/_S4A8107_hawbbq.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521852/News%20Titan%20Gallery/_S4A8078_eh619x.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521851/News%20Titan%20Gallery/_S4A8118_z7mebm.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521848/News%20Titan%20Gallery/_S4A8116_gydsbw.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521848/News%20Titan%20Gallery/_S4A8013_xb5b8p.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521847/News%20Titan%20Gallery/_S4A7971_jfdivt.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521844/News%20Titan%20Gallery/_S4A8133_wgttff.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521843/News%20Titan%20Gallery/_S4A7881_ynt6qb.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521843/News%20Titan%20Gallery/_S4A8081_multm3.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521841/News%20Titan%20Gallery/_S4A7929_twltb3.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521839/News%20Titan%20Gallery/_S4A8073_jy8mbl.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521838/News%20Titan%20Gallery/_S4A7934_lpzora.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521836/News%20Titan%20Gallery/_S4A8105_bax948.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521835/News%20Titan%20Gallery/_S4A8040_oxxbeo.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521832/News%20Titan%20Gallery/_S4A7921_zdiukp.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521829/News%20Titan%20Gallery/_S4A8019_rsynim.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521828/News%20Titan%20Gallery/_S4A8061_kihevk.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521828/News%20Titan%20Gallery/_S4A7942_o4an70.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521828/News%20Titan%20Gallery/_S4A8089_x4qk2d.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521820/News%20Titan%20Gallery/_S4A8067_nefipj.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521820/News%20Titan%20Gallery/_S4A7910_omhn67.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521819/News%20Titan%20Gallery/_S4A8086_l2p9jt.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521819/News%20Titan%20Gallery/_S4A8032_kkb2js.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521817/News%20Titan%20Gallery/_S4A7919_tmuemz.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521814/News%20Titan%20Gallery/_S4A8104_xxkw2d.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521812/News%20Titan%20Gallery/_S4A7893_u2mqb1.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521697/News%20Titan%20Gallery/_S4A7910_xzqd62.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521671/News%20Titan%20Gallery/_S4A8040_ltgwlm.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521677/News%20Titan%20Gallery/_S4A8023_yjcdiu.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521680/News%20Titan%20Gallery/_S4A8113_ezhurt.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521683/News%20Titan%20Gallery/_S4A7953_uethzy.jpg",
  "https://res.cloudinary.com/dt3czltxx/image/upload/v1710521678/News%20Titan%20Gallery/_S4A8021_wfy2q7.jpg",
];

const MediaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">
        Media Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageUrls.map((url, index) => (
          <MediaItem
            key={index}
            src={url}
            alt={`Media Title ${index + 1}`}
            filename={`image${index + 1}.jpg`} // Customize the filename later
          />
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
