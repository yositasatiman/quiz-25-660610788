"use client";

import { ReplyProps } from "@/libs/types";
import { comments } from "@/libs/comments";

export default function Reply({ userImagePath, username, replyText, likeNum }: ReplyProps )
 {
  return <div className="d-flex gap-2 my-2 ps-5">
  <img
    src="/profileImages/puppy.jpg"
    width="48"
    height="48"
    className="rounded-circle"
    style={{ objectFit: "cover" }}
  />
  <div
    className="rounded rounded-3 p-2"
    style={{ backgroundColor: "#3A3B3C" }}
  >
    <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
      หมาน้อย
    </span>
    <br />
    <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}></img>
      <span style={{ color: "#B0B3B8" }}>2 คน</span>
    </div>
  </div>
</div>;
}
