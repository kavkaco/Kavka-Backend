// @generated by protoc-gen-es v1.10.0 with parameter "target=ts,import_extension=.js"
// @generated from file protobuf/auth/v1/auth.proto (package protobuf.auth.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { User } from "../../model/user/v1/user_pb.js";

/**
 * @generated from message protobuf.auth.v1.LoginRequest
 */
export class LoginRequest extends Message<LoginRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<LoginRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.LoginRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginRequest {
    return new LoginRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LoginRequest | PlainMessage<LoginRequest> | undefined, b: LoginRequest | PlainMessage<LoginRequest> | undefined): boolean {
    return proto3.util.equals(LoginRequest, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.LoginResponse
 */
export class LoginResponse extends Message<LoginResponse> {
  /**
   * @generated from field: protobuf.model.user.v1.User user = 1;
   */
  user?: User;

  /**
   * @generated from field: string access_token = 2;
   */
  accessToken = "";

  /**
   * @generated from field: string refresh_token = 3;
   */
  refreshToken = "";

  constructor(data?: PartialMessage<LoginResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.LoginResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
    { no: 2, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginResponse {
    return new LoginResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LoginResponse | PlainMessage<LoginResponse> | undefined, b: LoginResponse | PlainMessage<LoginResponse> | undefined): boolean {
    return proto3.util.equals(LoginResponse, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.RegisterRequest
 */
export class RegisterRequest extends Message<RegisterRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string last_name = 2;
   */
  lastName = "";

  /**
   * @generated from field: string username = 3;
   */
  username = "";

  /**
   * @generated from field: string email = 4;
   */
  email = "";

  /**
   * @generated from field: string password = 5;
   */
  password = "";

  /**
   * @generated from field: string verify_email_redirect_url = 6;
   */
  verifyEmailRedirectUrl = "";

  constructor(data?: PartialMessage<RegisterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.RegisterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "verify_email_redirect_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterRequest {
    return new RegisterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterRequest {
    return new RegisterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterRequest {
    return new RegisterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterRequest | PlainMessage<RegisterRequest> | undefined, b: RegisterRequest | PlainMessage<RegisterRequest> | undefined): boolean {
    return proto3.util.equals(RegisterRequest, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.RegisterResponse
 */
export class RegisterResponse extends Message<RegisterResponse> {
  /**
   * @generated from field: protobuf.model.user.v1.User user = 1;
   */
  user?: User;

  /**
   * @generated from field: string verify_email_token = 2;
   */
  verifyEmailToken = "";

  constructor(data?: PartialMessage<RegisterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.RegisterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
    { no: 2, name: "verify_email_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterResponse {
    return new RegisterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterResponse {
    return new RegisterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterResponse {
    return new RegisterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterResponse | PlainMessage<RegisterResponse> | undefined, b: RegisterResponse | PlainMessage<RegisterResponse> | undefined): boolean {
    return proto3.util.equals(RegisterResponse, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.VerifyEmailRequest
 */
export class VerifyEmailRequest extends Message<VerifyEmailRequest> {
  /**
   * @generated from field: string verify_email_token = 1;
   */
  verifyEmailToken = "";

  constructor(data?: PartialMessage<VerifyEmailRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.VerifyEmailRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "verify_email_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEmailRequest {
    return new VerifyEmailRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEmailRequest {
    return new VerifyEmailRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEmailRequest {
    return new VerifyEmailRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyEmailRequest | PlainMessage<VerifyEmailRequest> | undefined, b: VerifyEmailRequest | PlainMessage<VerifyEmailRequest> | undefined): boolean {
    return proto3.util.equals(VerifyEmailRequest, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.VerifyEmailResponse
 */
export class VerifyEmailResponse extends Message<VerifyEmailResponse> {
  constructor(data?: PartialMessage<VerifyEmailResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.VerifyEmailResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEmailResponse {
    return new VerifyEmailResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEmailResponse {
    return new VerifyEmailResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEmailResponse {
    return new VerifyEmailResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyEmailResponse | PlainMessage<VerifyEmailResponse> | undefined, b: VerifyEmailResponse | PlainMessage<VerifyEmailResponse> | undefined): boolean {
    return proto3.util.equals(VerifyEmailResponse, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.SendResetPasswordRequest
 */
export class SendResetPasswordRequest extends Message<SendResetPasswordRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string reset_password_redirect_url = 2;
   */
  resetPasswordRedirectUrl = "";

  constructor(data?: PartialMessage<SendResetPasswordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.SendResetPasswordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reset_password_redirect_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResetPasswordRequest {
    return new SendResetPasswordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResetPasswordRequest {
    return new SendResetPasswordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResetPasswordRequest {
    return new SendResetPasswordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SendResetPasswordRequest | PlainMessage<SendResetPasswordRequest> | undefined, b: SendResetPasswordRequest | PlainMessage<SendResetPasswordRequest> | undefined): boolean {
    return proto3.util.equals(SendResetPasswordRequest, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.SendResetPasswordResponse
 */
export class SendResetPasswordResponse extends Message<SendResetPasswordResponse> {
  /**
   * @generated from field: string reset_password_token = 1;
   */
  resetPasswordToken = "";

  /**
   * @generated from field: google.protobuf.Duration timeout = 2;
   */
  timeout?: Duration;

  constructor(data?: PartialMessage<SendResetPasswordResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.SendResetPasswordResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reset_password_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timeout", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResetPasswordResponse {
    return new SendResetPasswordResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResetPasswordResponse {
    return new SendResetPasswordResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResetPasswordResponse {
    return new SendResetPasswordResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SendResetPasswordResponse | PlainMessage<SendResetPasswordResponse> | undefined, b: SendResetPasswordResponse | PlainMessage<SendResetPasswordResponse> | undefined): boolean {
    return proto3.util.equals(SendResetPasswordResponse, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.SubmitResetPasswordRequest
 */
export class SubmitResetPasswordRequest extends Message<SubmitResetPasswordRequest> {
  /**
   * @generated from field: string reset_password_token = 1;
   */
  resetPasswordToken = "";

  /**
   * @generated from field: string new_password = 2;
   */
  newPassword = "";

  constructor(data?: PartialMessage<SubmitResetPasswordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.SubmitResetPasswordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reset_password_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitResetPasswordRequest {
    return new SubmitResetPasswordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitResetPasswordRequest {
    return new SubmitResetPasswordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitResetPasswordRequest {
    return new SubmitResetPasswordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SubmitResetPasswordRequest | PlainMessage<SubmitResetPasswordRequest> | undefined, b: SubmitResetPasswordRequest | PlainMessage<SubmitResetPasswordRequest> | undefined): boolean {
    return proto3.util.equals(SubmitResetPasswordRequest, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.SubmitResetPasswordResponse
 */
export class SubmitResetPasswordResponse extends Message<SubmitResetPasswordResponse> {
  constructor(data?: PartialMessage<SubmitResetPasswordResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.SubmitResetPasswordResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitResetPasswordResponse {
    return new SubmitResetPasswordResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitResetPasswordResponse {
    return new SubmitResetPasswordResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitResetPasswordResponse {
    return new SubmitResetPasswordResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SubmitResetPasswordResponse | PlainMessage<SubmitResetPasswordResponse> | undefined, b: SubmitResetPasswordResponse | PlainMessage<SubmitResetPasswordResponse> | undefined): boolean {
    return proto3.util.equals(SubmitResetPasswordResponse, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.ChangePasswordRequest
 */
export class ChangePasswordRequest extends Message<ChangePasswordRequest> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * @generated from field: string old_password = 2;
   */
  oldPassword = "";

  /**
   * @generated from field: string new_password = 3;
   */
  newPassword = "";

  constructor(data?: PartialMessage<ChangePasswordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.ChangePasswordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "old_password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChangePasswordRequest {
    return new ChangePasswordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChangePasswordRequest {
    return new ChangePasswordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChangePasswordRequest {
    return new ChangePasswordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChangePasswordRequest | PlainMessage<ChangePasswordRequest> | undefined, b: ChangePasswordRequest | PlainMessage<ChangePasswordRequest> | undefined): boolean {
    return proto3.util.equals(ChangePasswordRequest, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.ChangePasswordResponse
 */
export class ChangePasswordResponse extends Message<ChangePasswordResponse> {
  constructor(data?: PartialMessage<ChangePasswordResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.ChangePasswordResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChangePasswordResponse {
    return new ChangePasswordResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChangePasswordResponse {
    return new ChangePasswordResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChangePasswordResponse {
    return new ChangePasswordResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChangePasswordResponse | PlainMessage<ChangePasswordResponse> | undefined, b: ChangePasswordResponse | PlainMessage<ChangePasswordResponse> | undefined): boolean {
    return proto3.util.equals(ChangePasswordResponse, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.AuthenticateRequest
 */
export class AuthenticateRequest extends Message<AuthenticateRequest> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  constructor(data?: PartialMessage<AuthenticateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.AuthenticateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticateRequest {
    return new AuthenticateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticateRequest {
    return new AuthenticateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticateRequest {
    return new AuthenticateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AuthenticateRequest | PlainMessage<AuthenticateRequest> | undefined, b: AuthenticateRequest | PlainMessage<AuthenticateRequest> | undefined): boolean {
    return proto3.util.equals(AuthenticateRequest, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.AuthenticateResponse
 */
export class AuthenticateResponse extends Message<AuthenticateResponse> {
  /**
   * @generated from field: protobuf.model.user.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<AuthenticateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.AuthenticateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticateResponse {
    return new AuthenticateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticateResponse {
    return new AuthenticateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticateResponse {
    return new AuthenticateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AuthenticateResponse | PlainMessage<AuthenticateResponse> | undefined, b: AuthenticateResponse | PlainMessage<AuthenticateResponse> | undefined): boolean {
    return proto3.util.equals(AuthenticateResponse, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.RefreshTokenRequest
 */
export class RefreshTokenRequest extends Message<RefreshTokenRequest> {
  /**
   * @generated from field: string refresh_token = 1;
   */
  refreshToken = "";

  /**
   * @generated from field: string access_token = 2;
   */
  accessToken = "";

  constructor(data?: PartialMessage<RefreshTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.RefreshTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenRequest {
    return new RefreshTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined, b: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined): boolean {
    return proto3.util.equals(RefreshTokenRequest, a, b);
  }
}

/**
 * @generated from message protobuf.auth.v1.RefreshTokenResponse
 */
export class RefreshTokenResponse extends Message<RefreshTokenResponse> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  constructor(data?: PartialMessage<RefreshTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "protobuf.auth.v1.RefreshTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenResponse {
    return new RefreshTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenResponse {
    return new RefreshTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenResponse {
    return new RefreshTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RefreshTokenResponse | PlainMessage<RefreshTokenResponse> | undefined, b: RefreshTokenResponse | PlainMessage<RefreshTokenResponse> | undefined): boolean {
    return proto3.util.equals(RefreshTokenResponse, a, b);
  }
}

