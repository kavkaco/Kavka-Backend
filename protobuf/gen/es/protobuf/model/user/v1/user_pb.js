// @generated by protoc-gen-es v1.10.0 with parameter "target=js,import_extension=.js,js_import_style=module"
// @generated from file protobuf/model/user/v1/user.proto (package protobuf.model.user.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message protobuf.model.user.v1.User
 */
export const User = /*@__PURE__*/ proto3.makeMessageType(
  "protobuf.model.user.v1.User",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "biography", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

