// @generated by protoc-gen-es v1.10.0
// @generated from file protobuf/auth/v1/auth.proto (package protobuf.auth.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { User } from "../../model/user/v1/user_pb.js";

/**
 * @generated from message protobuf.auth.v1.LoginRequest
 */
export declare class LoginRequest extends Message<LoginRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  constructor(data?: PartialMessage<LoginRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.LoginRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginRequest;

  static equals(a: LoginRequest | PlainMessage<LoginRequest> | undefined, b: LoginRequest | PlainMessage<LoginRequest> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.LoginResponse
 */
export declare class LoginResponse extends Message<LoginResponse> {
  /**
   * @generated from field: protobuf.model.user.v1.User user = 1;
   */
  user?: User;

  /**
   * @generated from field: string access_token = 2;
   */
  accessToken: string;

  /**
   * @generated from field: string refresh_token = 3;
   */
  refreshToken: string;

  constructor(data?: PartialMessage<LoginResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.LoginResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginResponse;

  static equals(a: LoginResponse | PlainMessage<LoginResponse> | undefined, b: LoginResponse | PlainMessage<LoginResponse> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.RegisterRequest
 */
export declare class RegisterRequest extends Message<RegisterRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string last_name = 2;
   */
  lastName: string;

  /**
   * @generated from field: string username = 3;
   */
  username: string;

  /**
   * @generated from field: string email = 4;
   */
  email: string;

  /**
   * @generated from field: string password = 5;
   */
  password: string;

  constructor(data?: PartialMessage<RegisterRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.RegisterRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterRequest;

  static equals(a: RegisterRequest | PlainMessage<RegisterRequest> | undefined, b: RegisterRequest | PlainMessage<RegisterRequest> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.RegisterResponse
 */
export declare class RegisterResponse extends Message<RegisterResponse> {
  /**
   * @generated from field: protobuf.model.user.v1.User user = 1;
   */
  user?: User;

  /**
   * @generated from field: string verify_email_token = 2;
   */
  verifyEmailToken: string;

  constructor(data?: PartialMessage<RegisterResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.RegisterResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterResponse;

  static equals(a: RegisterResponse | PlainMessage<RegisterResponse> | undefined, b: RegisterResponse | PlainMessage<RegisterResponse> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.VerifyEmailRequest
 */
export declare class VerifyEmailRequest extends Message<VerifyEmailRequest> {
  /**
   * @generated from field: string verify_email_token = 1;
   */
  verifyEmailToken: string;

  constructor(data?: PartialMessage<VerifyEmailRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.VerifyEmailRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEmailRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEmailRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEmailRequest;

  static equals(a: VerifyEmailRequest | PlainMessage<VerifyEmailRequest> | undefined, b: VerifyEmailRequest | PlainMessage<VerifyEmailRequest> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.VerifyEmailResponse
 */
export declare class VerifyEmailResponse extends Message<VerifyEmailResponse> {
  constructor(data?: PartialMessage<VerifyEmailResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.VerifyEmailResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEmailResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEmailResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEmailResponse;

  static equals(a: VerifyEmailResponse | PlainMessage<VerifyEmailResponse> | undefined, b: VerifyEmailResponse | PlainMessage<VerifyEmailResponse> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.SendResetPasswordVerificationRequest
 */
export declare class SendResetPasswordVerificationRequest extends Message<SendResetPasswordVerificationRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  constructor(data?: PartialMessage<SendResetPasswordVerificationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.SendResetPasswordVerificationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResetPasswordVerificationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResetPasswordVerificationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResetPasswordVerificationRequest;

  static equals(a: SendResetPasswordVerificationRequest | PlainMessage<SendResetPasswordVerificationRequest> | undefined, b: SendResetPasswordVerificationRequest | PlainMessage<SendResetPasswordVerificationRequest> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.SendResetPasswordVerificationResponse
 */
export declare class SendResetPasswordVerificationResponse extends Message<SendResetPasswordVerificationResponse> {
  /**
   * @generated from field: string verify_email_token = 1;
   */
  verifyEmailToken: string;

  /**
   * @generated from field: google.protobuf.Duration timeout = 2;
   */
  timeout?: Duration;

  constructor(data?: PartialMessage<SendResetPasswordVerificationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.SendResetPasswordVerificationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResetPasswordVerificationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResetPasswordVerificationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResetPasswordVerificationResponse;

  static equals(a: SendResetPasswordVerificationResponse | PlainMessage<SendResetPasswordVerificationResponse> | undefined, b: SendResetPasswordVerificationResponse | PlainMessage<SendResetPasswordVerificationResponse> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.SubmitResetPasswordRequest
 */
export declare class SubmitResetPasswordRequest extends Message<SubmitResetPasswordRequest> {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  /**
   * @generated from field: string new_password = 2;
   */
  newPassword: string;

  constructor(data?: PartialMessage<SubmitResetPasswordRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.SubmitResetPasswordRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitResetPasswordRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitResetPasswordRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitResetPasswordRequest;

  static equals(a: SubmitResetPasswordRequest | PlainMessage<SubmitResetPasswordRequest> | undefined, b: SubmitResetPasswordRequest | PlainMessage<SubmitResetPasswordRequest> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.SubmitResetPasswordResponse
 */
export declare class SubmitResetPasswordResponse extends Message<SubmitResetPasswordResponse> {
  constructor(data?: PartialMessage<SubmitResetPasswordResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.SubmitResetPasswordResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitResetPasswordResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitResetPasswordResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitResetPasswordResponse;

  static equals(a: SubmitResetPasswordResponse | PlainMessage<SubmitResetPasswordResponse> | undefined, b: SubmitResetPasswordResponse | PlainMessage<SubmitResetPasswordResponse> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.ChangePasswordRequest
 */
export declare class ChangePasswordRequest extends Message<ChangePasswordRequest> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken: string;

  /**
   * @generated from field: string old_password = 2;
   */
  oldPassword: string;

  /**
   * @generated from field: string new_password = 3;
   */
  newPassword: string;

  constructor(data?: PartialMessage<ChangePasswordRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.ChangePasswordRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChangePasswordRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChangePasswordRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChangePasswordRequest;

  static equals(a: ChangePasswordRequest | PlainMessage<ChangePasswordRequest> | undefined, b: ChangePasswordRequest | PlainMessage<ChangePasswordRequest> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.ChangePasswordResponse
 */
export declare class ChangePasswordResponse extends Message<ChangePasswordResponse> {
  constructor(data?: PartialMessage<ChangePasswordResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.ChangePasswordResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChangePasswordResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChangePasswordResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChangePasswordResponse;

  static equals(a: ChangePasswordResponse | PlainMessage<ChangePasswordResponse> | undefined, b: ChangePasswordResponse | PlainMessage<ChangePasswordResponse> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.AuthenticateRequest
 */
export declare class AuthenticateRequest extends Message<AuthenticateRequest> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken: string;

  constructor(data?: PartialMessage<AuthenticateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.AuthenticateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticateRequest;

  static equals(a: AuthenticateRequest | PlainMessage<AuthenticateRequest> | undefined, b: AuthenticateRequest | PlainMessage<AuthenticateRequest> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.AuthenticateResponse
 */
export declare class AuthenticateResponse extends Message<AuthenticateResponse> {
  /**
   * @generated from field: protobuf.model.user.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<AuthenticateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.AuthenticateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticateResponse;

  static equals(a: AuthenticateResponse | PlainMessage<AuthenticateResponse> | undefined, b: AuthenticateResponse | PlainMessage<AuthenticateResponse> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.RefreshTokenRequest
 */
export declare class RefreshTokenRequest extends Message<RefreshTokenRequest> {
  /**
   * @generated from field: string refresh_token = 1;
   */
  refreshToken: string;

  /**
   * @generated from field: string access_token = 2;
   */
  accessToken: string;

  constructor(data?: PartialMessage<RefreshTokenRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.RefreshTokenRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenRequest;

  static equals(a: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined, b: RefreshTokenRequest | PlainMessage<RefreshTokenRequest> | undefined): boolean;
}

/**
 * @generated from message protobuf.auth.v1.RefreshTokenResponse
 */
export declare class RefreshTokenResponse extends Message<RefreshTokenResponse> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken: string;

  constructor(data?: PartialMessage<RefreshTokenResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf.auth.v1.RefreshTokenResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshTokenResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshTokenResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshTokenResponse;

  static equals(a: RefreshTokenResponse | PlainMessage<RefreshTokenResponse> | undefined, b: RefreshTokenResponse | PlainMessage<RefreshTokenResponse> | undefined): boolean;
}

