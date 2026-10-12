
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Technician
 * 
 */
export type Technician = $Result.DefaultSelection<Prisma.$TechnicianPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model UpgradeRequest
 * 
 */
export type UpgradeRequest = $Result.DefaultSelection<Prisma.$UpgradeRequestPayload>
/**
 * Model TechnicianReview
 * 
 */
export type TechnicianReview = $Result.DefaultSelection<Prisma.$TechnicianReviewPayload>
/**
 * Model TechnicianFieldReport
 * 
 */
export type TechnicianFieldReport = $Result.DefaultSelection<Prisma.$TechnicianFieldReportPayload>
/**
 * Model TechnicianMetric
 * 
 */
export type TechnicianMetric = $Result.DefaultSelection<Prisma.$TechnicianMetricPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER',
  TECHNICIAN: 'TECHNICIAN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CustomerType: {
  RESIDENTIAL: 'RESIDENTIAL',
  BUSINESS: 'BUSINESS',
  GOVERNMENT: 'GOVERNMENT',
  COMMERCIAL: 'COMMERCIAL'
};

export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType]


export const PlanStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING',
  SUSPENDED: 'SUSPENDED'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]


export const TechnicianStatus: {
  ON_SITE: 'ON_SITE',
  TRAVELING: 'TRAVELING',
  AVAILABLE: 'AVAILABLE',
  OFF_DUTY: 'OFF_DUTY',
  UNAVAILABLE: 'UNAVAILABLE'
};

export type TechnicianStatus = (typeof TechnicianStatus)[keyof typeof TechnicianStatus]


export const TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]


export const TicketStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const JobPriority: {
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type JobPriority = (typeof JobPriority)[keyof typeof JobPriority]


export const JobStatus: {
  ASSIGNED: 'ASSIGNED',
  EN_ROUTE: 'EN_ROUTE',
  ON_SITE: 'ON_SITE'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const InvoiceStatus: {
  PAID: 'PAID',
  PENDING: 'PENDING',
  OVERDUE: 'OVERDUE'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const PaymentStatus: {
  PAID: 'PAID',
  PENDING: 'PENDING'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const UpgradeStatus: {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  ON_HOLD: 'ON_HOLD'
};

export type UpgradeStatus = (typeof UpgradeStatus)[keyof typeof UpgradeStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CustomerType = $Enums.CustomerType

export const CustomerType: typeof $Enums.CustomerType

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

export type TechnicianStatus = $Enums.TechnicianStatus

export const TechnicianStatus: typeof $Enums.TechnicianStatus

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type JobPriority = $Enums.JobPriority

export const JobPriority: typeof $Enums.JobPriority

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type UpgradeStatus = $Enums.UpgradeStatus

export const UpgradeStatus: typeof $Enums.UpgradeStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.technician`: Exposes CRUD operations for the **Technician** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Technicians
    * const technicians = await prisma.technician.findMany()
    * ```
    */
  get technician(): Prisma.TechnicianDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.upgradeRequest`: Exposes CRUD operations for the **UpgradeRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpgradeRequests
    * const upgradeRequests = await prisma.upgradeRequest.findMany()
    * ```
    */
  get upgradeRequest(): Prisma.UpgradeRequestDelegate<ExtArgs>;

  /**
   * `prisma.technicianReview`: Exposes CRUD operations for the **TechnicianReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechnicianReviews
    * const technicianReviews = await prisma.technicianReview.findMany()
    * ```
    */
  get technicianReview(): Prisma.TechnicianReviewDelegate<ExtArgs>;

  /**
   * `prisma.technicianFieldReport`: Exposes CRUD operations for the **TechnicianFieldReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechnicianFieldReports
    * const technicianFieldReports = await prisma.technicianFieldReport.findMany()
    * ```
    */
  get technicianFieldReport(): Prisma.TechnicianFieldReportDelegate<ExtArgs>;

  /**
   * `prisma.technicianMetric`: Exposes CRUD operations for the **TechnicianMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechnicianMetrics
    * const technicianMetrics = await prisma.technicianMetric.findMany()
    * ```
    */
  get technicianMetric(): Prisma.TechnicianMetricDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Customer: 'Customer',
    Plan: 'Plan',
    Technician: 'Technician',
    Ticket: 'Ticket',
    Job: 'Job',
    Invoice: 'Invoice',
    Payment: 'Payment',
    UpgradeRequest: 'UpgradeRequest',
    TechnicianReview: 'TechnicianReview',
    TechnicianFieldReport: 'TechnicianFieldReport',
    TechnicianMetric: 'TechnicianMetric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "admin" | "customer" | "plan" | "technician" | "ticket" | "job" | "invoice" | "payment" | "upgradeRequest" | "technicianReview" | "technicianFieldReport" | "technicianMetric"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CustomerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CustomerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlanFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlanAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Technician: {
        payload: Prisma.$TechnicianPayload<ExtArgs>
        fields: Prisma.TechnicianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          findFirst: {
            args: Prisma.TechnicianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          findMany: {
            args: Prisma.TechnicianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          create: {
            args: Prisma.TechnicianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          createMany: {
            args: Prisma.TechnicianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TechnicianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          update: {
            args: Prisma.TechnicianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          deleteMany: {
            args: Prisma.TechnicianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TechnicianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          aggregate: {
            args: Prisma.TechnicianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnician>
          }
          groupBy: {
            args: Prisma.TechnicianGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TechnicianFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TechnicianAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TechnicianCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TicketFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TicketAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.JobFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.JobAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InvoiceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InvoiceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      UpgradeRequest: {
        payload: Prisma.$UpgradeRequestPayload<ExtArgs>
        fields: Prisma.UpgradeRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpgradeRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpgradeRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload>
          }
          findFirst: {
            args: Prisma.UpgradeRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpgradeRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload>
          }
          findMany: {
            args: Prisma.UpgradeRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload>[]
          }
          create: {
            args: Prisma.UpgradeRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload>
          }
          createMany: {
            args: Prisma.UpgradeRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UpgradeRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload>
          }
          update: {
            args: Prisma.UpgradeRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload>
          }
          deleteMany: {
            args: Prisma.UpgradeRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpgradeRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UpgradeRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpgradeRequestPayload>
          }
          aggregate: {
            args: Prisma.UpgradeRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpgradeRequest>
          }
          groupBy: {
            args: Prisma.UpgradeRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpgradeRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UpgradeRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UpgradeRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UpgradeRequestCountArgs<ExtArgs>
            result: $Utils.Optional<UpgradeRequestCountAggregateOutputType> | number
          }
        }
      }
      TechnicianReview: {
        payload: Prisma.$TechnicianReviewPayload<ExtArgs>
        fields: Prisma.TechnicianReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicianReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicianReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload>
          }
          findFirst: {
            args: Prisma.TechnicianReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicianReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload>
          }
          findMany: {
            args: Prisma.TechnicianReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload>[]
          }
          create: {
            args: Prisma.TechnicianReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload>
          }
          createMany: {
            args: Prisma.TechnicianReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TechnicianReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload>
          }
          update: {
            args: Prisma.TechnicianReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload>
          }
          deleteMany: {
            args: Prisma.TechnicianReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicianReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TechnicianReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianReviewPayload>
          }
          aggregate: {
            args: Prisma.TechnicianReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnicianReview>
          }
          groupBy: {
            args: Prisma.TechnicianReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TechnicianReviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TechnicianReviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TechnicianReviewCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianReviewCountAggregateOutputType> | number
          }
        }
      }
      TechnicianFieldReport: {
        payload: Prisma.$TechnicianFieldReportPayload<ExtArgs>
        fields: Prisma.TechnicianFieldReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicianFieldReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicianFieldReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload>
          }
          findFirst: {
            args: Prisma.TechnicianFieldReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicianFieldReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload>
          }
          findMany: {
            args: Prisma.TechnicianFieldReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload>[]
          }
          create: {
            args: Prisma.TechnicianFieldReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload>
          }
          createMany: {
            args: Prisma.TechnicianFieldReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TechnicianFieldReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload>
          }
          update: {
            args: Prisma.TechnicianFieldReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload>
          }
          deleteMany: {
            args: Prisma.TechnicianFieldReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicianFieldReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TechnicianFieldReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianFieldReportPayload>
          }
          aggregate: {
            args: Prisma.TechnicianFieldReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnicianFieldReport>
          }
          groupBy: {
            args: Prisma.TechnicianFieldReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianFieldReportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TechnicianFieldReportFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TechnicianFieldReportAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TechnicianFieldReportCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianFieldReportCountAggregateOutputType> | number
          }
        }
      }
      TechnicianMetric: {
        payload: Prisma.$TechnicianMetricPayload<ExtArgs>
        fields: Prisma.TechnicianMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicianMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicianMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload>
          }
          findFirst: {
            args: Prisma.TechnicianMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicianMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload>
          }
          findMany: {
            args: Prisma.TechnicianMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload>[]
          }
          create: {
            args: Prisma.TechnicianMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload>
          }
          createMany: {
            args: Prisma.TechnicianMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TechnicianMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload>
          }
          update: {
            args: Prisma.TechnicianMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload>
          }
          deleteMany: {
            args: Prisma.TechnicianMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicianMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TechnicianMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianMetricPayload>
          }
          aggregate: {
            args: Prisma.TechnicianMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnicianMetric>
          }
          groupBy: {
            args: Prisma.TechnicianMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianMetricGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TechnicianMetricFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TechnicianMetricAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TechnicianMetricCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianMetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    tickets: number
    invoices: number
    payments: number
    requests: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | CustomerCountOutputTypeCountTicketsArgs
    invoices?: boolean | CustomerCountOutputTypeCountInvoicesArgs
    payments?: boolean | CustomerCountOutputTypeCountPaymentsArgs
    requests?: boolean | CustomerCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpgradeRequestWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    customers: number
    invoices: number
    requests: number
    finalPlans: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | PlanCountOutputTypeCountCustomersArgs
    invoices?: boolean | PlanCountOutputTypeCountInvoicesArgs
    requests?: boolean | PlanCountOutputTypeCountRequestsArgs
    finalPlans?: boolean | PlanCountOutputTypeCountFinalPlansArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpgradeRequestWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountFinalPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpgradeRequestWhereInput
  }


  /**
   * Count Type TechnicianCountOutputType
   */

  export type TechnicianCountOutputType = {
    jobs: number
    tickets: number
    fieldReports: number
    reviews: number
    metrics: number
  }

  export type TechnicianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | TechnicianCountOutputTypeCountJobsArgs
    tickets?: boolean | TechnicianCountOutputTypeCountTicketsArgs
    fieldReports?: boolean | TechnicianCountOutputTypeCountFieldReportsArgs
    reviews?: boolean | TechnicianCountOutputTypeCountReviewsArgs
    metrics?: boolean | TechnicianCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianCountOutputType
     */
    select?: TechnicianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountFieldReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianFieldReportWhereInput
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianReviewWhereInput
  }

  /**
   * TechnicianCountOutputType without action
   */
  export type TechnicianCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianMetricWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    fieldReports: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fieldReports?: boolean | TicketCountOutputTypeCountFieldReportsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountFieldReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianFieldReportWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    payments: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | User$customerArgs<ExtArgs>
    technician?: boolean | User$technicianArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | User$customerArgs<ExtArgs>
    technician?: boolean | User$technicianArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      technician: Prisma.$TechnicianPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends User$customerArgs<ExtArgs> = {}>(args?: Subset<T, User$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    technician<T extends User$technicianArgs<ExtArgs> = {}>(args?: Subset<T, User$technicianArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.customer
   */
  export type User$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * User.technician
   */
  export type User$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    where?: TechnicianWhereInput
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    name: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>


  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    name: string | null
    email: string | null
    type: $Enums.CustomerType | null
    planId: string | null
    usage: string | null
    balance: string | null
    status: $Enums.PlanStatus | null
    area: string | null
    since: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    name: string | null
    email: string | null
    type: $Enums.CustomerType | null
    planId: string | null
    usage: string | null
    balance: string | null
    status: $Enums.PlanStatus | null
    area: string | null
    since: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    name: number
    email: number
    type: number
    planId: number
    usage: number
    balance: number
    status: number
    area: number
    since: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    name?: true
    email?: true
    type?: true
    planId?: true
    usage?: true
    balance?: true
    status?: true
    area?: true
    since?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    name?: true
    email?: true
    type?: true
    planId?: true
    usage?: true
    balance?: true
    status?: true
    area?: true
    since?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    name?: true
    email?: true
    type?: true
    planId?: true
    usage?: true
    balance?: true
    status?: true
    area?: true
    since?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    planId: string | null
    usage: string | null
    balance: string | null
    status: $Enums.PlanStatus
    area: string | null
    since: Date
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    name?: boolean
    email?: boolean
    type?: boolean
    planId?: boolean
    usage?: boolean
    balance?: boolean
    status?: boolean
    area?: boolean
    since?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | Customer$planArgs<ExtArgs>
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    invoices?: boolean | Customer$invoicesArgs<ExtArgs>
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    requests?: boolean | Customer$requestsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>


  export type CustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    name?: boolean
    email?: boolean
    type?: boolean
    planId?: boolean
    usage?: boolean
    balance?: boolean
    status?: boolean
    area?: boolean
    since?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | Customer$planArgs<ExtArgs>
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    invoices?: boolean | Customer$invoicesArgs<ExtArgs>
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    requests?: boolean | Customer$requestsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      requests: Prisma.$UpgradeRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountId: string
      name: string
      email: string
      type: $Enums.CustomerType
      planId: string | null
      usage: string | null
      balance: string | null
      status: $Enums.PlanStatus
      area: string | null
      since: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * @param {CustomerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const customer = await prisma.customer.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: CustomerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Customer.
     * @param {CustomerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const customer = await prisma.customer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CustomerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plan<T extends Customer$planArgs<ExtArgs> = {}>(args?: Subset<T, Customer$planArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tickets<T extends Customer$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    invoices<T extends Customer$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Customer$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    requests<T extends Customer$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly userId: FieldRef<"Customer", 'String'>
    readonly accountId: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly type: FieldRef<"Customer", 'CustomerType'>
    readonly planId: FieldRef<"Customer", 'String'>
    readonly usage: FieldRef<"Customer", 'String'>
    readonly balance: FieldRef<"Customer", 'String'>
    readonly status: FieldRef<"Customer", 'PlanStatus'>
    readonly area: FieldRef<"Customer", 'String'>
    readonly since: FieldRef<"Customer", 'DateTime'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer findRaw
   */
  export type CustomerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Customer aggregateRaw
   */
  export type CustomerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Customer.plan
   */
  export type Customer$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }

  /**
   * Customer.tickets
   */
  export type Customer$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Customer.invoices
   */
  export type Customer$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Customer.payments
   */
  export type Customer$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Customer.requests
   */
  export type Customer$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    where?: UpgradeRequestWhereInput
    orderBy?: UpgradeRequestOrderByWithRelationInput | UpgradeRequestOrderByWithRelationInput[]
    cursor?: UpgradeRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpgradeRequestScalarFieldEnum | UpgradeRequestScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    cost: number | null
  }

  export type PlanSumAggregateOutputType = {
    cost: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    speed: string | null
    cost: number | null
    status: $Enums.PlanStatus | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    speed: string | null
    cost: number | null
    status: $Enums.PlanStatus | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    type: number
    speed: number
    cost: number
    status: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    cost?: true
  }

  export type PlanSumAggregateInputType = {
    cost?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    speed?: true
    cost?: true
    status?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    speed?: true
    cost?: true
    status?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    speed?: true
    cost?: true
    status?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    type: string
    speed: string | null
    cost: number | null
    status: $Enums.PlanStatus
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    speed?: boolean
    cost?: boolean
    status?: boolean
    customers?: boolean | Plan$customersArgs<ExtArgs>
    invoices?: boolean | Plan$invoicesArgs<ExtArgs>
    requests?: boolean | Plan$requestsArgs<ExtArgs>
    finalPlans?: boolean | Plan$finalPlansArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>


  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    speed?: boolean
    cost?: boolean
    status?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Plan$customersArgs<ExtArgs>
    invoices?: boolean | Plan$invoicesArgs<ExtArgs>
    requests?: boolean | Plan$requestsArgs<ExtArgs>
    finalPlans?: boolean | Plan$finalPlansArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      requests: Prisma.$UpgradeRequestPayload<ExtArgs>[]
      finalPlans: Prisma.$UpgradeRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      speed: string | null
      cost: number | null
      status: $Enums.PlanStatus
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * @param {PlanFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const plan = await prisma.plan.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: PlanFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Plan.
     * @param {PlanAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const plan = await prisma.plan.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PlanAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Plan$customersArgs<ExtArgs> = {}>(args?: Subset<T, Plan$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany"> | Null>
    invoices<T extends Plan$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Plan$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    requests<T extends Plan$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "findMany"> | Null>
    finalPlans<T extends Plan$finalPlansArgs<ExtArgs> = {}>(args?: Subset<T, Plan$finalPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly type: FieldRef<"Plan", 'String'>
    readonly speed: FieldRef<"Plan", 'String'>
    readonly cost: FieldRef<"Plan", 'Int'>
    readonly status: FieldRef<"Plan", 'PlanStatus'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }

  /**
   * Plan findRaw
   */
  export type PlanFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Plan aggregateRaw
   */
  export type PlanAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Plan.customers
   */
  export type Plan$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Plan.invoices
   */
  export type Plan$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Plan.requests
   */
  export type Plan$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    where?: UpgradeRequestWhereInput
    orderBy?: UpgradeRequestOrderByWithRelationInput | UpgradeRequestOrderByWithRelationInput[]
    cursor?: UpgradeRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpgradeRequestScalarFieldEnum | UpgradeRequestScalarFieldEnum[]
  }

  /**
   * Plan.finalPlans
   */
  export type Plan$finalPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    where?: UpgradeRequestWhereInput
    orderBy?: UpgradeRequestOrderByWithRelationInput | UpgradeRequestOrderByWithRelationInput[]
    cursor?: UpgradeRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpgradeRequestScalarFieldEnum | UpgradeRequestScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Technician
   */

  export type AggregateTechnician = {
    _count: TechnicianCountAggregateOutputType | null
    _avg: TechnicianAvgAggregateOutputType | null
    _sum: TechnicianSumAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  export type TechnicianAvgAggregateOutputType = {
    rating: number | null
    completedJobsCount: number | null
    queueCount: number | null
  }

  export type TechnicianSumAggregateOutputType = {
    rating: number | null
    completedJobsCount: number | null
    queueCount: number | null
  }

  export type TechnicianMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    location: string | null
    phone: string | null
    status: $Enums.TechnicianStatus | null
    rating: number | null
    currentJobId: string | null
    completedJobsCount: number | null
    queueCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechnicianMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    location: string | null
    phone: string | null
    status: $Enums.TechnicianStatus | null
    rating: number | null
    currentJobId: string | null
    completedJobsCount: number | null
    queueCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TechnicianCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    location: number
    phone: number
    status: number
    rating: number
    currentJobId: number
    completedJobsCount: number
    queueCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TechnicianAvgAggregateInputType = {
    rating?: true
    completedJobsCount?: true
    queueCount?: true
  }

  export type TechnicianSumAggregateInputType = {
    rating?: true
    completedJobsCount?: true
    queueCount?: true
  }

  export type TechnicianMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    phone?: true
    status?: true
    rating?: true
    currentJobId?: true
    completedJobsCount?: true
    queueCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechnicianMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    phone?: true
    status?: true
    rating?: true
    currentJobId?: true
    completedJobsCount?: true
    queueCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TechnicianCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    phone?: true
    status?: true
    rating?: true
    currentJobId?: true
    completedJobsCount?: true
    queueCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TechnicianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technician to aggregate.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Technicians
    **/
    _count?: true | TechnicianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianMaxAggregateInputType
  }

  export type GetTechnicianAggregateType<T extends TechnicianAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnician]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnician[P]>
      : GetScalarType<T[P], AggregateTechnician[P]>
  }




  export type TechnicianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianWhereInput
    orderBy?: TechnicianOrderByWithAggregationInput | TechnicianOrderByWithAggregationInput[]
    by: TechnicianScalarFieldEnum[] | TechnicianScalarFieldEnum
    having?: TechnicianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianCountAggregateInputType | true
    _avg?: TechnicianAvgAggregateInputType
    _sum?: TechnicianSumAggregateInputType
    _min?: TechnicianMinAggregateInputType
    _max?: TechnicianMaxAggregateInputType
  }

  export type TechnicianGroupByOutputType = {
    id: string
    userId: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating: number
    currentJobId: string | null
    completedJobsCount: number
    queueCount: number
    createdAt: Date
    updatedAt: Date
    _count: TechnicianCountAggregateOutputType | null
    _avg: TechnicianAvgAggregateOutputType | null
    _sum: TechnicianSumAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  type GetTechnicianGroupByPayload<T extends TechnicianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
        }
      >
    >


  export type TechnicianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    location?: boolean
    phone?: boolean
    status?: boolean
    rating?: boolean
    currentJobId?: boolean
    completedJobsCount?: boolean
    queueCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | Technician$jobsArgs<ExtArgs>
    tickets?: boolean | Technician$ticketsArgs<ExtArgs>
    fieldReports?: boolean | Technician$fieldReportsArgs<ExtArgs>
    reviews?: boolean | Technician$reviewsArgs<ExtArgs>
    metrics?: boolean | Technician$metricsArgs<ExtArgs>
    _count?: boolean | TechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technician"]>


  export type TechnicianSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    location?: boolean
    phone?: boolean
    status?: boolean
    rating?: boolean
    currentJobId?: boolean
    completedJobsCount?: boolean
    queueCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TechnicianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | Technician$jobsArgs<ExtArgs>
    tickets?: boolean | Technician$ticketsArgs<ExtArgs>
    fieldReports?: boolean | Technician$fieldReportsArgs<ExtArgs>
    reviews?: boolean | Technician$reviewsArgs<ExtArgs>
    metrics?: boolean | Technician$metricsArgs<ExtArgs>
    _count?: boolean | TechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TechnicianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Technician"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobs: Prisma.$JobPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      fieldReports: Prisma.$TechnicianFieldReportPayload<ExtArgs>[]
      reviews: Prisma.$TechnicianReviewPayload<ExtArgs>[]
      metrics: Prisma.$TechnicianMetricPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      location: string
      phone: string
      status: $Enums.TechnicianStatus
      rating: number
      currentJobId: string | null
      completedJobsCount: number
      queueCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["technician"]>
    composites: {}
  }

  type TechnicianGetPayload<S extends boolean | null | undefined | TechnicianDefaultArgs> = $Result.GetResult<Prisma.$TechnicianPayload, S>

  type TechnicianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TechnicianFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TechnicianCountAggregateInputType | true
    }

  export interface TechnicianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Technician'], meta: { name: 'Technician' } }
    /**
     * Find zero or one Technician that matches the filter.
     * @param {TechnicianFindUniqueArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicianFindUniqueArgs>(args: SelectSubset<T, TechnicianFindUniqueArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Technician that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TechnicianFindUniqueOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicianFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Technician that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindFirstArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicianFindFirstArgs>(args?: SelectSubset<T, TechnicianFindFirstArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Technician that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindFirstOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicianFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicianFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Technicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technicians
     * const technicians = await prisma.technician.findMany()
     * 
     * // Get first 10 Technicians
     * const technicians = await prisma.technician.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianWithIdOnly = await prisma.technician.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicianFindManyArgs>(args?: SelectSubset<T, TechnicianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Technician.
     * @param {TechnicianCreateArgs} args - Arguments to create a Technician.
     * @example
     * // Create one Technician
     * const Technician = await prisma.technician.create({
     *   data: {
     *     // ... data to create a Technician
     *   }
     * })
     * 
     */
    create<T extends TechnicianCreateArgs>(args: SelectSubset<T, TechnicianCreateArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Technicians.
     * @param {TechnicianCreateManyArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicianCreateManyArgs>(args?: SelectSubset<T, TechnicianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Technician.
     * @param {TechnicianDeleteArgs} args - Arguments to delete one Technician.
     * @example
     * // Delete one Technician
     * const Technician = await prisma.technician.delete({
     *   where: {
     *     // ... filter to delete one Technician
     *   }
     * })
     * 
     */
    delete<T extends TechnicianDeleteArgs>(args: SelectSubset<T, TechnicianDeleteArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Technician.
     * @param {TechnicianUpdateArgs} args - Arguments to update one Technician.
     * @example
     * // Update one Technician
     * const technician = await prisma.technician.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicianUpdateArgs>(args: SelectSubset<T, TechnicianUpdateArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Technicians.
     * @param {TechnicianDeleteManyArgs} args - Arguments to filter Technicians to delete.
     * @example
     * // Delete a few Technicians
     * const { count } = await prisma.technician.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicianDeleteManyArgs>(args?: SelectSubset<T, TechnicianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicianUpdateManyArgs>(args: SelectSubset<T, TechnicianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Technician.
     * @param {TechnicianUpsertArgs} args - Arguments to update or create a Technician.
     * @example
     * // Update or create a Technician
     * const technician = await prisma.technician.upsert({
     *   create: {
     *     // ... data to create a Technician
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technician we want to update
     *   }
     * })
     */
    upsert<T extends TechnicianUpsertArgs>(args: SelectSubset<T, TechnicianUpsertArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Technicians that matches the filter.
     * @param {TechnicianFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const technician = await prisma.technician.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: TechnicianFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Technician.
     * @param {TechnicianAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const technician = await prisma.technician.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TechnicianAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianCountArgs} args - Arguments to filter Technicians to count.
     * @example
     * // Count the number of Technicians
     * const count = await prisma.technician.count({
     *   where: {
     *     // ... the filter for the Technicians we want to count
     *   }
     * })
    **/
    count<T extends TechnicianCountArgs>(
      args?: Subset<T, TechnicianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnicianAggregateArgs>(args: Subset<T, TechnicianAggregateArgs>): Prisma.PrismaPromise<GetTechnicianAggregateType<T>>

    /**
     * Group by Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnicianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicianGroupByArgs['orderBy'] }
        : { orderBy?: TechnicianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnicianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Technician model
   */
  readonly fields: TechnicianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Technician.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    jobs<T extends Technician$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Technician$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany"> | Null>
    tickets<T extends Technician$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Technician$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    fieldReports<T extends Technician$fieldReportsArgs<ExtArgs> = {}>(args?: Subset<T, Technician$fieldReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Technician$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Technician$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "findMany"> | Null>
    metrics<T extends Technician$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Technician$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Technician model
   */ 
  interface TechnicianFieldRefs {
    readonly id: FieldRef<"Technician", 'String'>
    readonly userId: FieldRef<"Technician", 'String'>
    readonly name: FieldRef<"Technician", 'String'>
    readonly location: FieldRef<"Technician", 'String'>
    readonly phone: FieldRef<"Technician", 'String'>
    readonly status: FieldRef<"Technician", 'TechnicianStatus'>
    readonly rating: FieldRef<"Technician", 'Float'>
    readonly currentJobId: FieldRef<"Technician", 'String'>
    readonly completedJobsCount: FieldRef<"Technician", 'Int'>
    readonly queueCount: FieldRef<"Technician", 'Int'>
    readonly createdAt: FieldRef<"Technician", 'DateTime'>
    readonly updatedAt: FieldRef<"Technician", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Technician findUnique
   */
  export type TechnicianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician findUniqueOrThrow
   */
  export type TechnicianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician findFirst
   */
  export type TechnicianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician findFirstOrThrow
   */
  export type TechnicianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician findMany
   */
  export type TechnicianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter, which Technicians to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician create
   */
  export type TechnicianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The data needed to create a Technician.
     */
    data: XOR<TechnicianCreateInput, TechnicianUncheckedCreateInput>
  }

  /**
   * Technician createMany
   */
  export type TechnicianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Technicians.
     */
    data: TechnicianCreateManyInput | TechnicianCreateManyInput[]
  }

  /**
   * Technician update
   */
  export type TechnicianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The data needed to update a Technician.
     */
    data: XOR<TechnicianUpdateInput, TechnicianUncheckedUpdateInput>
    /**
     * Choose, which Technician to update.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician updateMany
   */
  export type TechnicianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Technicians.
     */
    data: XOR<TechnicianUpdateManyMutationInput, TechnicianUncheckedUpdateManyInput>
    /**
     * Filter which Technicians to update
     */
    where?: TechnicianWhereInput
  }

  /**
   * Technician upsert
   */
  export type TechnicianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * The filter to search for the Technician to update in case it exists.
     */
    where: TechnicianWhereUniqueInput
    /**
     * In case the Technician found by the `where` argument doesn't exist, create a new Technician with this data.
     */
    create: XOR<TechnicianCreateInput, TechnicianUncheckedCreateInput>
    /**
     * In case the Technician was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicianUpdateInput, TechnicianUncheckedUpdateInput>
  }

  /**
   * Technician delete
   */
  export type TechnicianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    /**
     * Filter which Technician to delete.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician deleteMany
   */
  export type TechnicianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technicians to delete
     */
    where?: TechnicianWhereInput
  }

  /**
   * Technician findRaw
   */
  export type TechnicianFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Technician aggregateRaw
   */
  export type TechnicianAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Technician.jobs
   */
  export type Technician$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Technician.tickets
   */
  export type Technician$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Technician.fieldReports
   */
  export type Technician$fieldReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    where?: TechnicianFieldReportWhereInput
    orderBy?: TechnicianFieldReportOrderByWithRelationInput | TechnicianFieldReportOrderByWithRelationInput[]
    cursor?: TechnicianFieldReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechnicianFieldReportScalarFieldEnum | TechnicianFieldReportScalarFieldEnum[]
  }

  /**
   * Technician.reviews
   */
  export type Technician$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    where?: TechnicianReviewWhereInput
    orderBy?: TechnicianReviewOrderByWithRelationInput | TechnicianReviewOrderByWithRelationInput[]
    cursor?: TechnicianReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechnicianReviewScalarFieldEnum | TechnicianReviewScalarFieldEnum[]
  }

  /**
   * Technician.metrics
   */
  export type Technician$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    where?: TechnicianMetricWhereInput
    orderBy?: TechnicianMetricOrderByWithRelationInput | TechnicianMetricOrderByWithRelationInput[]
    cursor?: TechnicianMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechnicianMetricScalarFieldEnum | TechnicianMetricScalarFieldEnum[]
  }

  /**
   * Technician without action
   */
  export type TechnicianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    assignedToId: string | null
    ticketNumber: string | null
    issue: string | null
    category: string | null
    priority: $Enums.TicketPriority | null
    status: $Enums.TicketStatus | null
    sla: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    assignedToId: string | null
    ticketNumber: string | null
    issue: string | null
    category: string | null
    priority: $Enums.TicketPriority | null
    status: $Enums.TicketStatus | null
    sla: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    customerId: number
    assignedToId: number
    ticketNumber: number
    issue: number
    category: number
    priority: number
    status: number
    sla: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    customerId?: true
    assignedToId?: true
    ticketNumber?: true
    issue?: true
    category?: true
    priority?: true
    status?: true
    sla?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    customerId?: true
    assignedToId?: true
    ticketNumber?: true
    issue?: true
    category?: true
    priority?: true
    status?: true
    sla?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    customerId?: true
    assignedToId?: true
    ticketNumber?: true
    issue?: true
    category?: true
    priority?: true
    status?: true
    sla?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    customerId: string
    assignedToId: string | null
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    assignedToId?: boolean
    ticketNumber?: boolean
    issue?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    sla?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    job?: boolean | Ticket$jobArgs<ExtArgs>
    fieldReports?: boolean | Ticket$fieldReportsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>


  export type TicketSelectScalar = {
    id?: boolean
    customerId?: boolean
    assignedToId?: boolean
    ticketNumber?: boolean
    issue?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    sla?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    job?: boolean | Ticket$jobArgs<ExtArgs>
    fieldReports?: boolean | Ticket$fieldReportsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      assignedTo: Prisma.$TechnicianPayload<ExtArgs> | null
      job: Prisma.$JobPayload<ExtArgs> | null
      fieldReports: Prisma.$TechnicianFieldReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      assignedToId: string | null
      ticketNumber: string
      issue: string
      category: string
      priority: $Enums.TicketPriority
      status: $Enums.TicketStatus
      sla: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * @param {TicketFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticket = await prisma.ticket.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: TicketFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ticket.
     * @param {TicketAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticket = await prisma.ticket.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TicketAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignedTo<T extends Ticket$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$assignedToArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    job<T extends Ticket$jobArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$jobArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    fieldReports<T extends Ticket$fieldReportsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$fieldReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly customerId: FieldRef<"Ticket", 'String'>
    readonly assignedToId: FieldRef<"Ticket", 'String'>
    readonly ticketNumber: FieldRef<"Ticket", 'String'>
    readonly issue: FieldRef<"Ticket", 'String'>
    readonly category: FieldRef<"Ticket", 'String'>
    readonly priority: FieldRef<"Ticket", 'TicketPriority'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly sla: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket findRaw
   */
  export type TicketFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ticket aggregateRaw
   */
  export type TicketAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ticket.assignedTo
   */
  export type Ticket$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    where?: TechnicianWhereInput
  }

  /**
   * Ticket.job
   */
  export type Ticket$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
  }

  /**
   * Ticket.fieldReports
   */
  export type Ticket$fieldReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    where?: TechnicianFieldReportWhereInput
    orderBy?: TechnicianFieldReportOrderByWithRelationInput | TechnicianFieldReportOrderByWithRelationInput[]
    cursor?: TechnicianFieldReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TechnicianFieldReportScalarFieldEnum | TechnicianFieldReportScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    technicianId: string | null
    subscriber: string | null
    address: string | null
    phone: string | null
    priority: $Enums.JobPriority | null
    status: $Enums.JobStatus | null
    timeLeft: string | null
    issue: string | null
    accessNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    technicianId: string | null
    subscriber: string | null
    address: string | null
    phone: string | null
    priority: $Enums.JobPriority | null
    status: $Enums.JobStatus | null
    timeLeft: string | null
    issue: string | null
    accessNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    ticketId: number
    technicianId: number
    subscriber: number
    address: number
    phone: number
    priority: number
    status: number
    timeLeft: number
    issue: number
    accessNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobMinAggregateInputType = {
    id?: true
    ticketId?: true
    technicianId?: true
    subscriber?: true
    address?: true
    phone?: true
    priority?: true
    status?: true
    timeLeft?: true
    issue?: true
    accessNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    ticketId?: true
    technicianId?: true
    subscriber?: true
    address?: true
    phone?: true
    priority?: true
    status?: true
    timeLeft?: true
    issue?: true
    accessNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    ticketId?: true
    technicianId?: true
    subscriber?: true
    address?: true
    phone?: true
    priority?: true
    status?: true
    timeLeft?: true
    issue?: true
    accessNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    ticketId: string
    technicianId: string | null
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft: string | null
    issue: string
    accessNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    technicianId?: boolean
    subscriber?: boolean
    address?: boolean
    phone?: boolean
    priority?: boolean
    status?: boolean
    timeLeft?: boolean
    issue?: boolean
    accessNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    technician?: boolean | Job$technicianArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>


  export type JobSelectScalar = {
    id?: boolean
    ticketId?: boolean
    technicianId?: boolean
    subscriber?: boolean
    address?: boolean
    phone?: boolean
    priority?: boolean
    status?: boolean
    timeLeft?: boolean
    issue?: boolean
    accessNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    technician?: boolean | Job$technicianArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      technician: Prisma.$TechnicianPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      technicianId: string | null
      subscriber: string
      address: string
      phone: string
      priority: $Enums.JobPriority
      status: $Enums.JobStatus
      timeLeft: string | null
      issue: string
      accessNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * @param {JobFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const job = await prisma.job.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: JobFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Job.
     * @param {JobAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const job = await prisma.job.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: JobAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    technician<T extends Job$technicianArgs<ExtArgs> = {}>(args?: Subset<T, Job$technicianArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */ 
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly ticketId: FieldRef<"Job", 'String'>
    readonly technicianId: FieldRef<"Job", 'String'>
    readonly subscriber: FieldRef<"Job", 'String'>
    readonly address: FieldRef<"Job", 'String'>
    readonly phone: FieldRef<"Job", 'String'>
    readonly priority: FieldRef<"Job", 'JobPriority'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly timeLeft: FieldRef<"Job", 'String'>
    readonly issue: FieldRef<"Job", 'String'>
    readonly accessNote: FieldRef<"Job", 'String'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }

  /**
   * Job findRaw
   */
  export type JobFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Job aggregateRaw
   */
  export type JobAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Job.technician
   */
  export type Job$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianInclude<ExtArgs> | null
    where?: TechnicianWhereInput
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    planId: string | null
    invoiceNumber: string | null
    email: string | null
    contact: string | null
    amount: number | null
    dueDate: Date | null
    paymentMethod: string | null
    status: $Enums.InvoiceStatus | null
    createdAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    planId: string | null
    invoiceNumber: string | null
    email: string | null
    contact: string | null
    amount: number | null
    dueDate: Date | null
    paymentMethod: string | null
    status: $Enums.InvoiceStatus | null
    createdAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    customerId: number
    planId: number
    invoiceNumber: number
    email: number
    contact: number
    amount: number
    dueDate: number
    paymentMethod: number
    status: number
    createdAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    customerId?: true
    planId?: true
    invoiceNumber?: true
    email?: true
    contact?: true
    amount?: true
    dueDate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    customerId?: true
    planId?: true
    invoiceNumber?: true
    email?: true
    contact?: true
    amount?: true
    dueDate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    customerId?: true
    planId?: true
    invoiceNumber?: true
    email?: true
    contact?: true
    amount?: true
    dueDate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    customerId: string
    planId: string | null
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date
    paymentMethod: string | null
    status: $Enums.InvoiceStatus
    createdAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    planId?: boolean
    invoiceNumber?: boolean
    email?: boolean
    contact?: boolean
    amount?: boolean
    dueDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    plan?: boolean | Invoice$planArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>


  export type InvoiceSelectScalar = {
    id?: boolean
    customerId?: boolean
    planId?: boolean
    invoiceNumber?: boolean
    email?: boolean
    contact?: boolean
    amount?: boolean
    dueDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    plan?: boolean | Invoice$planArgs<ExtArgs>
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      planId: string | null
      invoiceNumber: string
      email: string
      contact: string
      amount: number
      dueDate: Date
      paymentMethod: string | null
      status: $Enums.InvoiceStatus
      createdAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * @param {InvoiceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const invoice = await prisma.invoice.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: InvoiceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Invoice.
     * @param {InvoiceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const invoice = await prisma.invoice.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InvoiceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plan<T extends Invoice$planArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$planArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly customerId: FieldRef<"Invoice", 'String'>
    readonly planId: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly email: FieldRef<"Invoice", 'String'>
    readonly contact: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Int'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly paymentMethod: FieldRef<"Invoice", 'String'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice findRaw
   */
  export type InvoiceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Invoice aggregateRaw
   */
  export type InvoiceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Invoice.plan
   */
  export type Invoice$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    invoiceId: string | null
    period: string | null
    amount: number | null
    due: Date | null
    method: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    invoiceId: string | null
    period: string | null
    amount: number | null
    due: Date | null
    method: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    customerId: number
    invoiceId: number
    period: number
    amount: number
    due: number
    method: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    customerId?: true
    invoiceId?: true
    period?: true
    amount?: true
    due?: true
    method?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    customerId?: true
    invoiceId?: true
    period?: true
    amount?: true
    due?: true
    method?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    customerId?: true
    invoiceId?: true
    period?: true
    amount?: true
    due?: true
    method?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    customerId: string
    invoiceId: string
    period: string
    amount: number
    due: Date | null
    method: string | null
    status: $Enums.PaymentStatus
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    invoiceId?: boolean
    period?: boolean
    amount?: boolean
    due?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>


  export type PaymentSelectScalar = {
    id?: boolean
    customerId?: boolean
    invoiceId?: boolean
    period?: boolean
    amount?: boolean
    due?: boolean
    method?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      invoiceId: string
      period: string
      amount: number
      due: Date | null
      method: string | null
      status: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * @param {PaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payment = await prisma.payment.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: PaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payment.
     * @param {PaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payment = await prisma.payment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly customerId: FieldRef<"Payment", 'String'>
    readonly invoiceId: FieldRef<"Payment", 'String'>
    readonly period: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly due: FieldRef<"Payment", 'DateTime'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment findRaw
   */
  export type PaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payment aggregateRaw
   */
  export type PaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model UpgradeRequest
   */

  export type AggregateUpgradeRequest = {
    _count: UpgradeRequestCountAggregateOutputType | null
    _min: UpgradeRequestMinAggregateOutputType | null
    _max: UpgradeRequestMaxAggregateOutputType | null
  }

  export type UpgradeRequestMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    initialPlanId: string | null
    finalPlanId: string | null
    requestedAt: Date | null
    status: $Enums.UpgradeStatus | null
  }

  export type UpgradeRequestMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    initialPlanId: string | null
    finalPlanId: string | null
    requestedAt: Date | null
    status: $Enums.UpgradeStatus | null
  }

  export type UpgradeRequestCountAggregateOutputType = {
    id: number
    customerId: number
    initialPlanId: number
    finalPlanId: number
    requestedAt: number
    status: number
    _all: number
  }


  export type UpgradeRequestMinAggregateInputType = {
    id?: true
    customerId?: true
    initialPlanId?: true
    finalPlanId?: true
    requestedAt?: true
    status?: true
  }

  export type UpgradeRequestMaxAggregateInputType = {
    id?: true
    customerId?: true
    initialPlanId?: true
    finalPlanId?: true
    requestedAt?: true
    status?: true
  }

  export type UpgradeRequestCountAggregateInputType = {
    id?: true
    customerId?: true
    initialPlanId?: true
    finalPlanId?: true
    requestedAt?: true
    status?: true
    _all?: true
  }

  export type UpgradeRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpgradeRequest to aggregate.
     */
    where?: UpgradeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpgradeRequests to fetch.
     */
    orderBy?: UpgradeRequestOrderByWithRelationInput | UpgradeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpgradeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpgradeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpgradeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpgradeRequests
    **/
    _count?: true | UpgradeRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpgradeRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpgradeRequestMaxAggregateInputType
  }

  export type GetUpgradeRequestAggregateType<T extends UpgradeRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateUpgradeRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpgradeRequest[P]>
      : GetScalarType<T[P], AggregateUpgradeRequest[P]>
  }




  export type UpgradeRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpgradeRequestWhereInput
    orderBy?: UpgradeRequestOrderByWithAggregationInput | UpgradeRequestOrderByWithAggregationInput[]
    by: UpgradeRequestScalarFieldEnum[] | UpgradeRequestScalarFieldEnum
    having?: UpgradeRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpgradeRequestCountAggregateInputType | true
    _min?: UpgradeRequestMinAggregateInputType
    _max?: UpgradeRequestMaxAggregateInputType
  }

  export type UpgradeRequestGroupByOutputType = {
    id: string
    customerId: string
    initialPlanId: string | null
    finalPlanId: string | null
    requestedAt: Date
    status: $Enums.UpgradeStatus
    _count: UpgradeRequestCountAggregateOutputType | null
    _min: UpgradeRequestMinAggregateOutputType | null
    _max: UpgradeRequestMaxAggregateOutputType | null
  }

  type GetUpgradeRequestGroupByPayload<T extends UpgradeRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpgradeRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpgradeRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpgradeRequestGroupByOutputType[P]>
            : GetScalarType<T[P], UpgradeRequestGroupByOutputType[P]>
        }
      >
    >


  export type UpgradeRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    initialPlanId?: boolean
    finalPlanId?: boolean
    requestedAt?: boolean
    status?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    initialPlan?: boolean | UpgradeRequest$initialPlanArgs<ExtArgs>
    finalPlan?: boolean | UpgradeRequest$finalPlanArgs<ExtArgs>
  }, ExtArgs["result"]["upgradeRequest"]>


  export type UpgradeRequestSelectScalar = {
    id?: boolean
    customerId?: boolean
    initialPlanId?: boolean
    finalPlanId?: boolean
    requestedAt?: boolean
    status?: boolean
  }

  export type UpgradeRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    initialPlan?: boolean | UpgradeRequest$initialPlanArgs<ExtArgs>
    finalPlan?: boolean | UpgradeRequest$finalPlanArgs<ExtArgs>
  }

  export type $UpgradeRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpgradeRequest"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      initialPlan: Prisma.$PlanPayload<ExtArgs> | null
      finalPlan: Prisma.$PlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      initialPlanId: string | null
      finalPlanId: string | null
      requestedAt: Date
      status: $Enums.UpgradeStatus
    }, ExtArgs["result"]["upgradeRequest"]>
    composites: {}
  }

  type UpgradeRequestGetPayload<S extends boolean | null | undefined | UpgradeRequestDefaultArgs> = $Result.GetResult<Prisma.$UpgradeRequestPayload, S>

  type UpgradeRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UpgradeRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UpgradeRequestCountAggregateInputType | true
    }

  export interface UpgradeRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpgradeRequest'], meta: { name: 'UpgradeRequest' } }
    /**
     * Find zero or one UpgradeRequest that matches the filter.
     * @param {UpgradeRequestFindUniqueArgs} args - Arguments to find a UpgradeRequest
     * @example
     * // Get one UpgradeRequest
     * const upgradeRequest = await prisma.upgradeRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpgradeRequestFindUniqueArgs>(args: SelectSubset<T, UpgradeRequestFindUniqueArgs<ExtArgs>>): Prisma__UpgradeRequestClient<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UpgradeRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UpgradeRequestFindUniqueOrThrowArgs} args - Arguments to find a UpgradeRequest
     * @example
     * // Get one UpgradeRequest
     * const upgradeRequest = await prisma.upgradeRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpgradeRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, UpgradeRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpgradeRequestClient<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UpgradeRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpgradeRequestFindFirstArgs} args - Arguments to find a UpgradeRequest
     * @example
     * // Get one UpgradeRequest
     * const upgradeRequest = await prisma.upgradeRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpgradeRequestFindFirstArgs>(args?: SelectSubset<T, UpgradeRequestFindFirstArgs<ExtArgs>>): Prisma__UpgradeRequestClient<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UpgradeRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpgradeRequestFindFirstOrThrowArgs} args - Arguments to find a UpgradeRequest
     * @example
     * // Get one UpgradeRequest
     * const upgradeRequest = await prisma.upgradeRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpgradeRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, UpgradeRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpgradeRequestClient<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UpgradeRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpgradeRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpgradeRequests
     * const upgradeRequests = await prisma.upgradeRequest.findMany()
     * 
     * // Get first 10 UpgradeRequests
     * const upgradeRequests = await prisma.upgradeRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upgradeRequestWithIdOnly = await prisma.upgradeRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpgradeRequestFindManyArgs>(args?: SelectSubset<T, UpgradeRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UpgradeRequest.
     * @param {UpgradeRequestCreateArgs} args - Arguments to create a UpgradeRequest.
     * @example
     * // Create one UpgradeRequest
     * const UpgradeRequest = await prisma.upgradeRequest.create({
     *   data: {
     *     // ... data to create a UpgradeRequest
     *   }
     * })
     * 
     */
    create<T extends UpgradeRequestCreateArgs>(args: SelectSubset<T, UpgradeRequestCreateArgs<ExtArgs>>): Prisma__UpgradeRequestClient<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UpgradeRequests.
     * @param {UpgradeRequestCreateManyArgs} args - Arguments to create many UpgradeRequests.
     * @example
     * // Create many UpgradeRequests
     * const upgradeRequest = await prisma.upgradeRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpgradeRequestCreateManyArgs>(args?: SelectSubset<T, UpgradeRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UpgradeRequest.
     * @param {UpgradeRequestDeleteArgs} args - Arguments to delete one UpgradeRequest.
     * @example
     * // Delete one UpgradeRequest
     * const UpgradeRequest = await prisma.upgradeRequest.delete({
     *   where: {
     *     // ... filter to delete one UpgradeRequest
     *   }
     * })
     * 
     */
    delete<T extends UpgradeRequestDeleteArgs>(args: SelectSubset<T, UpgradeRequestDeleteArgs<ExtArgs>>): Prisma__UpgradeRequestClient<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UpgradeRequest.
     * @param {UpgradeRequestUpdateArgs} args - Arguments to update one UpgradeRequest.
     * @example
     * // Update one UpgradeRequest
     * const upgradeRequest = await prisma.upgradeRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpgradeRequestUpdateArgs>(args: SelectSubset<T, UpgradeRequestUpdateArgs<ExtArgs>>): Prisma__UpgradeRequestClient<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UpgradeRequests.
     * @param {UpgradeRequestDeleteManyArgs} args - Arguments to filter UpgradeRequests to delete.
     * @example
     * // Delete a few UpgradeRequests
     * const { count } = await prisma.upgradeRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpgradeRequestDeleteManyArgs>(args?: SelectSubset<T, UpgradeRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpgradeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpgradeRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpgradeRequests
     * const upgradeRequest = await prisma.upgradeRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpgradeRequestUpdateManyArgs>(args: SelectSubset<T, UpgradeRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UpgradeRequest.
     * @param {UpgradeRequestUpsertArgs} args - Arguments to update or create a UpgradeRequest.
     * @example
     * // Update or create a UpgradeRequest
     * const upgradeRequest = await prisma.upgradeRequest.upsert({
     *   create: {
     *     // ... data to create a UpgradeRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpgradeRequest we want to update
     *   }
     * })
     */
    upsert<T extends UpgradeRequestUpsertArgs>(args: SelectSubset<T, UpgradeRequestUpsertArgs<ExtArgs>>): Prisma__UpgradeRequestClient<$Result.GetResult<Prisma.$UpgradeRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more UpgradeRequests that matches the filter.
     * @param {UpgradeRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const upgradeRequest = await prisma.upgradeRequest.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UpgradeRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UpgradeRequest.
     * @param {UpgradeRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const upgradeRequest = await prisma.upgradeRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UpgradeRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UpgradeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpgradeRequestCountArgs} args - Arguments to filter UpgradeRequests to count.
     * @example
     * // Count the number of UpgradeRequests
     * const count = await prisma.upgradeRequest.count({
     *   where: {
     *     // ... the filter for the UpgradeRequests we want to count
     *   }
     * })
    **/
    count<T extends UpgradeRequestCountArgs>(
      args?: Subset<T, UpgradeRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpgradeRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpgradeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpgradeRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpgradeRequestAggregateArgs>(args: Subset<T, UpgradeRequestAggregateArgs>): Prisma.PrismaPromise<GetUpgradeRequestAggregateType<T>>

    /**
     * Group by UpgradeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpgradeRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpgradeRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpgradeRequestGroupByArgs['orderBy'] }
        : { orderBy?: UpgradeRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpgradeRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpgradeRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpgradeRequest model
   */
  readonly fields: UpgradeRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpgradeRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpgradeRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    initialPlan<T extends UpgradeRequest$initialPlanArgs<ExtArgs> = {}>(args?: Subset<T, UpgradeRequest$initialPlanArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    finalPlan<T extends UpgradeRequest$finalPlanArgs<ExtArgs> = {}>(args?: Subset<T, UpgradeRequest$finalPlanArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UpgradeRequest model
   */ 
  interface UpgradeRequestFieldRefs {
    readonly id: FieldRef<"UpgradeRequest", 'String'>
    readonly customerId: FieldRef<"UpgradeRequest", 'String'>
    readonly initialPlanId: FieldRef<"UpgradeRequest", 'String'>
    readonly finalPlanId: FieldRef<"UpgradeRequest", 'String'>
    readonly requestedAt: FieldRef<"UpgradeRequest", 'DateTime'>
    readonly status: FieldRef<"UpgradeRequest", 'UpgradeStatus'>
  }
    

  // Custom InputTypes
  /**
   * UpgradeRequest findUnique
   */
  export type UpgradeRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * Filter, which UpgradeRequest to fetch.
     */
    where: UpgradeRequestWhereUniqueInput
  }

  /**
   * UpgradeRequest findUniqueOrThrow
   */
  export type UpgradeRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * Filter, which UpgradeRequest to fetch.
     */
    where: UpgradeRequestWhereUniqueInput
  }

  /**
   * UpgradeRequest findFirst
   */
  export type UpgradeRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * Filter, which UpgradeRequest to fetch.
     */
    where?: UpgradeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpgradeRequests to fetch.
     */
    orderBy?: UpgradeRequestOrderByWithRelationInput | UpgradeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpgradeRequests.
     */
    cursor?: UpgradeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpgradeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpgradeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpgradeRequests.
     */
    distinct?: UpgradeRequestScalarFieldEnum | UpgradeRequestScalarFieldEnum[]
  }

  /**
   * UpgradeRequest findFirstOrThrow
   */
  export type UpgradeRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * Filter, which UpgradeRequest to fetch.
     */
    where?: UpgradeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpgradeRequests to fetch.
     */
    orderBy?: UpgradeRequestOrderByWithRelationInput | UpgradeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpgradeRequests.
     */
    cursor?: UpgradeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpgradeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpgradeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpgradeRequests.
     */
    distinct?: UpgradeRequestScalarFieldEnum | UpgradeRequestScalarFieldEnum[]
  }

  /**
   * UpgradeRequest findMany
   */
  export type UpgradeRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * Filter, which UpgradeRequests to fetch.
     */
    where?: UpgradeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpgradeRequests to fetch.
     */
    orderBy?: UpgradeRequestOrderByWithRelationInput | UpgradeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpgradeRequests.
     */
    cursor?: UpgradeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpgradeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpgradeRequests.
     */
    skip?: number
    distinct?: UpgradeRequestScalarFieldEnum | UpgradeRequestScalarFieldEnum[]
  }

  /**
   * UpgradeRequest create
   */
  export type UpgradeRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a UpgradeRequest.
     */
    data: XOR<UpgradeRequestCreateInput, UpgradeRequestUncheckedCreateInput>
  }

  /**
   * UpgradeRequest createMany
   */
  export type UpgradeRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpgradeRequests.
     */
    data: UpgradeRequestCreateManyInput | UpgradeRequestCreateManyInput[]
  }

  /**
   * UpgradeRequest update
   */
  export type UpgradeRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a UpgradeRequest.
     */
    data: XOR<UpgradeRequestUpdateInput, UpgradeRequestUncheckedUpdateInput>
    /**
     * Choose, which UpgradeRequest to update.
     */
    where: UpgradeRequestWhereUniqueInput
  }

  /**
   * UpgradeRequest updateMany
   */
  export type UpgradeRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpgradeRequests.
     */
    data: XOR<UpgradeRequestUpdateManyMutationInput, UpgradeRequestUncheckedUpdateManyInput>
    /**
     * Filter which UpgradeRequests to update
     */
    where?: UpgradeRequestWhereInput
  }

  /**
   * UpgradeRequest upsert
   */
  export type UpgradeRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the UpgradeRequest to update in case it exists.
     */
    where: UpgradeRequestWhereUniqueInput
    /**
     * In case the UpgradeRequest found by the `where` argument doesn't exist, create a new UpgradeRequest with this data.
     */
    create: XOR<UpgradeRequestCreateInput, UpgradeRequestUncheckedCreateInput>
    /**
     * In case the UpgradeRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpgradeRequestUpdateInput, UpgradeRequestUncheckedUpdateInput>
  }

  /**
   * UpgradeRequest delete
   */
  export type UpgradeRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
    /**
     * Filter which UpgradeRequest to delete.
     */
    where: UpgradeRequestWhereUniqueInput
  }

  /**
   * UpgradeRequest deleteMany
   */
  export type UpgradeRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpgradeRequests to delete
     */
    where?: UpgradeRequestWhereInput
  }

  /**
   * UpgradeRequest findRaw
   */
  export type UpgradeRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UpgradeRequest aggregateRaw
   */
  export type UpgradeRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UpgradeRequest.initialPlan
   */
  export type UpgradeRequest$initialPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }

  /**
   * UpgradeRequest.finalPlan
   */
  export type UpgradeRequest$finalPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }

  /**
   * UpgradeRequest without action
   */
  export type UpgradeRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpgradeRequest
     */
    select?: UpgradeRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpgradeRequestInclude<ExtArgs> | null
  }


  /**
   * Model TechnicianReview
   */

  export type AggregateTechnicianReview = {
    _count: TechnicianReviewCountAggregateOutputType | null
    _avg: TechnicianReviewAvgAggregateOutputType | null
    _sum: TechnicianReviewSumAggregateOutputType | null
    _min: TechnicianReviewMinAggregateOutputType | null
    _max: TechnicianReviewMaxAggregateOutputType | null
  }

  export type TechnicianReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type TechnicianReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type TechnicianReviewMinAggregateOutputType = {
    id: string | null
    technicianId: string | null
    reviewer: string | null
    rating: number | null
    date: Date | null
    comment: string | null
  }

  export type TechnicianReviewMaxAggregateOutputType = {
    id: string | null
    technicianId: string | null
    reviewer: string | null
    rating: number | null
    date: Date | null
    comment: string | null
  }

  export type TechnicianReviewCountAggregateOutputType = {
    id: number
    technicianId: number
    reviewer: number
    rating: number
    date: number
    comment: number
    _all: number
  }


  export type TechnicianReviewAvgAggregateInputType = {
    rating?: true
  }

  export type TechnicianReviewSumAggregateInputType = {
    rating?: true
  }

  export type TechnicianReviewMinAggregateInputType = {
    id?: true
    technicianId?: true
    reviewer?: true
    rating?: true
    date?: true
    comment?: true
  }

  export type TechnicianReviewMaxAggregateInputType = {
    id?: true
    technicianId?: true
    reviewer?: true
    rating?: true
    date?: true
    comment?: true
  }

  export type TechnicianReviewCountAggregateInputType = {
    id?: true
    technicianId?: true
    reviewer?: true
    rating?: true
    date?: true
    comment?: true
    _all?: true
  }

  export type TechnicianReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicianReview to aggregate.
     */
    where?: TechnicianReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianReviews to fetch.
     */
    orderBy?: TechnicianReviewOrderByWithRelationInput | TechnicianReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicianReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechnicianReviews
    **/
    _count?: true | TechnicianReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicianReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicianReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianReviewMaxAggregateInputType
  }

  export type GetTechnicianReviewAggregateType<T extends TechnicianReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnicianReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnicianReview[P]>
      : GetScalarType<T[P], AggregateTechnicianReview[P]>
  }




  export type TechnicianReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianReviewWhereInput
    orderBy?: TechnicianReviewOrderByWithAggregationInput | TechnicianReviewOrderByWithAggregationInput[]
    by: TechnicianReviewScalarFieldEnum[] | TechnicianReviewScalarFieldEnum
    having?: TechnicianReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianReviewCountAggregateInputType | true
    _avg?: TechnicianReviewAvgAggregateInputType
    _sum?: TechnicianReviewSumAggregateInputType
    _min?: TechnicianReviewMinAggregateInputType
    _max?: TechnicianReviewMaxAggregateInputType
  }

  export type TechnicianReviewGroupByOutputType = {
    id: string
    technicianId: string
    reviewer: string
    rating: number
    date: Date
    comment: string
    _count: TechnicianReviewCountAggregateOutputType | null
    _avg: TechnicianReviewAvgAggregateOutputType | null
    _sum: TechnicianReviewSumAggregateOutputType | null
    _min: TechnicianReviewMinAggregateOutputType | null
    _max: TechnicianReviewMaxAggregateOutputType | null
  }

  type GetTechnicianReviewGroupByPayload<T extends TechnicianReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianReviewGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianReviewGroupByOutputType[P]>
        }
      >
    >


  export type TechnicianReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    technicianId?: boolean
    reviewer?: boolean
    rating?: boolean
    date?: boolean
    comment?: boolean
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicianReview"]>


  export type TechnicianReviewSelectScalar = {
    id?: boolean
    technicianId?: boolean
    reviewer?: boolean
    rating?: boolean
    date?: boolean
    comment?: boolean
  }

  export type TechnicianReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }

  export type $TechnicianReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TechnicianReview"
    objects: {
      technician: Prisma.$TechnicianPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      technicianId: string
      reviewer: string
      rating: number
      date: Date
      comment: string
    }, ExtArgs["result"]["technicianReview"]>
    composites: {}
  }

  type TechnicianReviewGetPayload<S extends boolean | null | undefined | TechnicianReviewDefaultArgs> = $Result.GetResult<Prisma.$TechnicianReviewPayload, S>

  type TechnicianReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TechnicianReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TechnicianReviewCountAggregateInputType | true
    }

  export interface TechnicianReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechnicianReview'], meta: { name: 'TechnicianReview' } }
    /**
     * Find zero or one TechnicianReview that matches the filter.
     * @param {TechnicianReviewFindUniqueArgs} args - Arguments to find a TechnicianReview
     * @example
     * // Get one TechnicianReview
     * const technicianReview = await prisma.technicianReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicianReviewFindUniqueArgs>(args: SelectSubset<T, TechnicianReviewFindUniqueArgs<ExtArgs>>): Prisma__TechnicianReviewClient<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TechnicianReview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TechnicianReviewFindUniqueOrThrowArgs} args - Arguments to find a TechnicianReview
     * @example
     * // Get one TechnicianReview
     * const technicianReview = await prisma.technicianReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicianReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicianReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicianReviewClient<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TechnicianReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianReviewFindFirstArgs} args - Arguments to find a TechnicianReview
     * @example
     * // Get one TechnicianReview
     * const technicianReview = await prisma.technicianReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicianReviewFindFirstArgs>(args?: SelectSubset<T, TechnicianReviewFindFirstArgs<ExtArgs>>): Prisma__TechnicianReviewClient<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TechnicianReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianReviewFindFirstOrThrowArgs} args - Arguments to find a TechnicianReview
     * @example
     * // Get one TechnicianReview
     * const technicianReview = await prisma.technicianReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicianReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicianReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicianReviewClient<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TechnicianReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnicianReviews
     * const technicianReviews = await prisma.technicianReview.findMany()
     * 
     * // Get first 10 TechnicianReviews
     * const technicianReviews = await prisma.technicianReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianReviewWithIdOnly = await prisma.technicianReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicianReviewFindManyArgs>(args?: SelectSubset<T, TechnicianReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TechnicianReview.
     * @param {TechnicianReviewCreateArgs} args - Arguments to create a TechnicianReview.
     * @example
     * // Create one TechnicianReview
     * const TechnicianReview = await prisma.technicianReview.create({
     *   data: {
     *     // ... data to create a TechnicianReview
     *   }
     * })
     * 
     */
    create<T extends TechnicianReviewCreateArgs>(args: SelectSubset<T, TechnicianReviewCreateArgs<ExtArgs>>): Prisma__TechnicianReviewClient<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TechnicianReviews.
     * @param {TechnicianReviewCreateManyArgs} args - Arguments to create many TechnicianReviews.
     * @example
     * // Create many TechnicianReviews
     * const technicianReview = await prisma.technicianReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicianReviewCreateManyArgs>(args?: SelectSubset<T, TechnicianReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TechnicianReview.
     * @param {TechnicianReviewDeleteArgs} args - Arguments to delete one TechnicianReview.
     * @example
     * // Delete one TechnicianReview
     * const TechnicianReview = await prisma.technicianReview.delete({
     *   where: {
     *     // ... filter to delete one TechnicianReview
     *   }
     * })
     * 
     */
    delete<T extends TechnicianReviewDeleteArgs>(args: SelectSubset<T, TechnicianReviewDeleteArgs<ExtArgs>>): Prisma__TechnicianReviewClient<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TechnicianReview.
     * @param {TechnicianReviewUpdateArgs} args - Arguments to update one TechnicianReview.
     * @example
     * // Update one TechnicianReview
     * const technicianReview = await prisma.technicianReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicianReviewUpdateArgs>(args: SelectSubset<T, TechnicianReviewUpdateArgs<ExtArgs>>): Prisma__TechnicianReviewClient<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TechnicianReviews.
     * @param {TechnicianReviewDeleteManyArgs} args - Arguments to filter TechnicianReviews to delete.
     * @example
     * // Delete a few TechnicianReviews
     * const { count } = await prisma.technicianReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicianReviewDeleteManyArgs>(args?: SelectSubset<T, TechnicianReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicianReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnicianReviews
     * const technicianReview = await prisma.technicianReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicianReviewUpdateManyArgs>(args: SelectSubset<T, TechnicianReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TechnicianReview.
     * @param {TechnicianReviewUpsertArgs} args - Arguments to update or create a TechnicianReview.
     * @example
     * // Update or create a TechnicianReview
     * const technicianReview = await prisma.technicianReview.upsert({
     *   create: {
     *     // ... data to create a TechnicianReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnicianReview we want to update
     *   }
     * })
     */
    upsert<T extends TechnicianReviewUpsertArgs>(args: SelectSubset<T, TechnicianReviewUpsertArgs<ExtArgs>>): Prisma__TechnicianReviewClient<$Result.GetResult<Prisma.$TechnicianReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more TechnicianReviews that matches the filter.
     * @param {TechnicianReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const technicianReview = await prisma.technicianReview.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: TechnicianReviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TechnicianReview.
     * @param {TechnicianReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const technicianReview = await prisma.technicianReview.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TechnicianReviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TechnicianReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianReviewCountArgs} args - Arguments to filter TechnicianReviews to count.
     * @example
     * // Count the number of TechnicianReviews
     * const count = await prisma.technicianReview.count({
     *   where: {
     *     // ... the filter for the TechnicianReviews we want to count
     *   }
     * })
    **/
    count<T extends TechnicianReviewCountArgs>(
      args?: Subset<T, TechnicianReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechnicianReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnicianReviewAggregateArgs>(args: Subset<T, TechnicianReviewAggregateArgs>): Prisma.PrismaPromise<GetTechnicianReviewAggregateType<T>>

    /**
     * Group by TechnicianReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnicianReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicianReviewGroupByArgs['orderBy'] }
        : { orderBy?: TechnicianReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnicianReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechnicianReview model
   */
  readonly fields: TechnicianReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechnicianReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicianReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technician<T extends TechnicianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnicianDefaultArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TechnicianReview model
   */ 
  interface TechnicianReviewFieldRefs {
    readonly id: FieldRef<"TechnicianReview", 'String'>
    readonly technicianId: FieldRef<"TechnicianReview", 'String'>
    readonly reviewer: FieldRef<"TechnicianReview", 'String'>
    readonly rating: FieldRef<"TechnicianReview", 'Int'>
    readonly date: FieldRef<"TechnicianReview", 'DateTime'>
    readonly comment: FieldRef<"TechnicianReview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TechnicianReview findUnique
   */
  export type TechnicianReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianReview to fetch.
     */
    where: TechnicianReviewWhereUniqueInput
  }

  /**
   * TechnicianReview findUniqueOrThrow
   */
  export type TechnicianReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianReview to fetch.
     */
    where: TechnicianReviewWhereUniqueInput
  }

  /**
   * TechnicianReview findFirst
   */
  export type TechnicianReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianReview to fetch.
     */
    where?: TechnicianReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianReviews to fetch.
     */
    orderBy?: TechnicianReviewOrderByWithRelationInput | TechnicianReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicianReviews.
     */
    cursor?: TechnicianReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicianReviews.
     */
    distinct?: TechnicianReviewScalarFieldEnum | TechnicianReviewScalarFieldEnum[]
  }

  /**
   * TechnicianReview findFirstOrThrow
   */
  export type TechnicianReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianReview to fetch.
     */
    where?: TechnicianReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianReviews to fetch.
     */
    orderBy?: TechnicianReviewOrderByWithRelationInput | TechnicianReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicianReviews.
     */
    cursor?: TechnicianReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicianReviews.
     */
    distinct?: TechnicianReviewScalarFieldEnum | TechnicianReviewScalarFieldEnum[]
  }

  /**
   * TechnicianReview findMany
   */
  export type TechnicianReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianReviews to fetch.
     */
    where?: TechnicianReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianReviews to fetch.
     */
    orderBy?: TechnicianReviewOrderByWithRelationInput | TechnicianReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechnicianReviews.
     */
    cursor?: TechnicianReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianReviews.
     */
    skip?: number
    distinct?: TechnicianReviewScalarFieldEnum | TechnicianReviewScalarFieldEnum[]
  }

  /**
   * TechnicianReview create
   */
  export type TechnicianReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a TechnicianReview.
     */
    data: XOR<TechnicianReviewCreateInput, TechnicianReviewUncheckedCreateInput>
  }

  /**
   * TechnicianReview createMany
   */
  export type TechnicianReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechnicianReviews.
     */
    data: TechnicianReviewCreateManyInput | TechnicianReviewCreateManyInput[]
  }

  /**
   * TechnicianReview update
   */
  export type TechnicianReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a TechnicianReview.
     */
    data: XOR<TechnicianReviewUpdateInput, TechnicianReviewUncheckedUpdateInput>
    /**
     * Choose, which TechnicianReview to update.
     */
    where: TechnicianReviewWhereUniqueInput
  }

  /**
   * TechnicianReview updateMany
   */
  export type TechnicianReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechnicianReviews.
     */
    data: XOR<TechnicianReviewUpdateManyMutationInput, TechnicianReviewUncheckedUpdateManyInput>
    /**
     * Filter which TechnicianReviews to update
     */
    where?: TechnicianReviewWhereInput
  }

  /**
   * TechnicianReview upsert
   */
  export type TechnicianReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the TechnicianReview to update in case it exists.
     */
    where: TechnicianReviewWhereUniqueInput
    /**
     * In case the TechnicianReview found by the `where` argument doesn't exist, create a new TechnicianReview with this data.
     */
    create: XOR<TechnicianReviewCreateInput, TechnicianReviewUncheckedCreateInput>
    /**
     * In case the TechnicianReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicianReviewUpdateInput, TechnicianReviewUncheckedUpdateInput>
  }

  /**
   * TechnicianReview delete
   */
  export type TechnicianReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
    /**
     * Filter which TechnicianReview to delete.
     */
    where: TechnicianReviewWhereUniqueInput
  }

  /**
   * TechnicianReview deleteMany
   */
  export type TechnicianReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicianReviews to delete
     */
    where?: TechnicianReviewWhereInput
  }

  /**
   * TechnicianReview findRaw
   */
  export type TechnicianReviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TechnicianReview aggregateRaw
   */
  export type TechnicianReviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TechnicianReview without action
   */
  export type TechnicianReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianReview
     */
    select?: TechnicianReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianReviewInclude<ExtArgs> | null
  }


  /**
   * Model TechnicianFieldReport
   */

  export type AggregateTechnicianFieldReport = {
    _count: TechnicianFieldReportCountAggregateOutputType | null
    _min: TechnicianFieldReportMinAggregateOutputType | null
    _max: TechnicianFieldReportMaxAggregateOutputType | null
  }

  export type TechnicianFieldReportMinAggregateOutputType = {
    id: string | null
    technicianId: string | null
    ticketId: string | null
    date: Date | null
    status: string | null
    description: string | null
    timeOnSite: string | null
    parts: string | null
  }

  export type TechnicianFieldReportMaxAggregateOutputType = {
    id: string | null
    technicianId: string | null
    ticketId: string | null
    date: Date | null
    status: string | null
    description: string | null
    timeOnSite: string | null
    parts: string | null
  }

  export type TechnicianFieldReportCountAggregateOutputType = {
    id: number
    technicianId: number
    ticketId: number
    date: number
    status: number
    description: number
    timeOnSite: number
    parts: number
    _all: number
  }


  export type TechnicianFieldReportMinAggregateInputType = {
    id?: true
    technicianId?: true
    ticketId?: true
    date?: true
    status?: true
    description?: true
    timeOnSite?: true
    parts?: true
  }

  export type TechnicianFieldReportMaxAggregateInputType = {
    id?: true
    technicianId?: true
    ticketId?: true
    date?: true
    status?: true
    description?: true
    timeOnSite?: true
    parts?: true
  }

  export type TechnicianFieldReportCountAggregateInputType = {
    id?: true
    technicianId?: true
    ticketId?: true
    date?: true
    status?: true
    description?: true
    timeOnSite?: true
    parts?: true
    _all?: true
  }

  export type TechnicianFieldReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicianFieldReport to aggregate.
     */
    where?: TechnicianFieldReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianFieldReports to fetch.
     */
    orderBy?: TechnicianFieldReportOrderByWithRelationInput | TechnicianFieldReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicianFieldReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianFieldReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianFieldReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechnicianFieldReports
    **/
    _count?: true | TechnicianFieldReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianFieldReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianFieldReportMaxAggregateInputType
  }

  export type GetTechnicianFieldReportAggregateType<T extends TechnicianFieldReportAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnicianFieldReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnicianFieldReport[P]>
      : GetScalarType<T[P], AggregateTechnicianFieldReport[P]>
  }




  export type TechnicianFieldReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianFieldReportWhereInput
    orderBy?: TechnicianFieldReportOrderByWithAggregationInput | TechnicianFieldReportOrderByWithAggregationInput[]
    by: TechnicianFieldReportScalarFieldEnum[] | TechnicianFieldReportScalarFieldEnum
    having?: TechnicianFieldReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianFieldReportCountAggregateInputType | true
    _min?: TechnicianFieldReportMinAggregateInputType
    _max?: TechnicianFieldReportMaxAggregateInputType
  }

  export type TechnicianFieldReportGroupByOutputType = {
    id: string
    technicianId: string
    ticketId: string
    date: Date
    status: string
    description: string
    timeOnSite: string
    parts: string | null
    _count: TechnicianFieldReportCountAggregateOutputType | null
    _min: TechnicianFieldReportMinAggregateOutputType | null
    _max: TechnicianFieldReportMaxAggregateOutputType | null
  }

  type GetTechnicianFieldReportGroupByPayload<T extends TechnicianFieldReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianFieldReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianFieldReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianFieldReportGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianFieldReportGroupByOutputType[P]>
        }
      >
    >


  export type TechnicianFieldReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    technicianId?: boolean
    ticketId?: boolean
    date?: boolean
    status?: boolean
    description?: boolean
    timeOnSite?: boolean
    parts?: boolean
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicianFieldReport"]>


  export type TechnicianFieldReportSelectScalar = {
    id?: boolean
    technicianId?: boolean
    ticketId?: boolean
    date?: boolean
    status?: boolean
    description?: boolean
    timeOnSite?: boolean
    parts?: boolean
  }

  export type TechnicianFieldReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TechnicianFieldReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TechnicianFieldReport"
    objects: {
      technician: Prisma.$TechnicianPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      technicianId: string
      ticketId: string
      date: Date
      status: string
      description: string
      timeOnSite: string
      parts: string | null
    }, ExtArgs["result"]["technicianFieldReport"]>
    composites: {}
  }

  type TechnicianFieldReportGetPayload<S extends boolean | null | undefined | TechnicianFieldReportDefaultArgs> = $Result.GetResult<Prisma.$TechnicianFieldReportPayload, S>

  type TechnicianFieldReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TechnicianFieldReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TechnicianFieldReportCountAggregateInputType | true
    }

  export interface TechnicianFieldReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechnicianFieldReport'], meta: { name: 'TechnicianFieldReport' } }
    /**
     * Find zero or one TechnicianFieldReport that matches the filter.
     * @param {TechnicianFieldReportFindUniqueArgs} args - Arguments to find a TechnicianFieldReport
     * @example
     * // Get one TechnicianFieldReport
     * const technicianFieldReport = await prisma.technicianFieldReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicianFieldReportFindUniqueArgs>(args: SelectSubset<T, TechnicianFieldReportFindUniqueArgs<ExtArgs>>): Prisma__TechnicianFieldReportClient<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TechnicianFieldReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TechnicianFieldReportFindUniqueOrThrowArgs} args - Arguments to find a TechnicianFieldReport
     * @example
     * // Get one TechnicianFieldReport
     * const technicianFieldReport = await prisma.technicianFieldReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicianFieldReportFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicianFieldReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicianFieldReportClient<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TechnicianFieldReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFieldReportFindFirstArgs} args - Arguments to find a TechnicianFieldReport
     * @example
     * // Get one TechnicianFieldReport
     * const technicianFieldReport = await prisma.technicianFieldReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicianFieldReportFindFirstArgs>(args?: SelectSubset<T, TechnicianFieldReportFindFirstArgs<ExtArgs>>): Prisma__TechnicianFieldReportClient<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TechnicianFieldReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFieldReportFindFirstOrThrowArgs} args - Arguments to find a TechnicianFieldReport
     * @example
     * // Get one TechnicianFieldReport
     * const technicianFieldReport = await prisma.technicianFieldReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicianFieldReportFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicianFieldReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicianFieldReportClient<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TechnicianFieldReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFieldReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnicianFieldReports
     * const technicianFieldReports = await prisma.technicianFieldReport.findMany()
     * 
     * // Get first 10 TechnicianFieldReports
     * const technicianFieldReports = await prisma.technicianFieldReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianFieldReportWithIdOnly = await prisma.technicianFieldReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicianFieldReportFindManyArgs>(args?: SelectSubset<T, TechnicianFieldReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TechnicianFieldReport.
     * @param {TechnicianFieldReportCreateArgs} args - Arguments to create a TechnicianFieldReport.
     * @example
     * // Create one TechnicianFieldReport
     * const TechnicianFieldReport = await prisma.technicianFieldReport.create({
     *   data: {
     *     // ... data to create a TechnicianFieldReport
     *   }
     * })
     * 
     */
    create<T extends TechnicianFieldReportCreateArgs>(args: SelectSubset<T, TechnicianFieldReportCreateArgs<ExtArgs>>): Prisma__TechnicianFieldReportClient<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TechnicianFieldReports.
     * @param {TechnicianFieldReportCreateManyArgs} args - Arguments to create many TechnicianFieldReports.
     * @example
     * // Create many TechnicianFieldReports
     * const technicianFieldReport = await prisma.technicianFieldReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicianFieldReportCreateManyArgs>(args?: SelectSubset<T, TechnicianFieldReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TechnicianFieldReport.
     * @param {TechnicianFieldReportDeleteArgs} args - Arguments to delete one TechnicianFieldReport.
     * @example
     * // Delete one TechnicianFieldReport
     * const TechnicianFieldReport = await prisma.technicianFieldReport.delete({
     *   where: {
     *     // ... filter to delete one TechnicianFieldReport
     *   }
     * })
     * 
     */
    delete<T extends TechnicianFieldReportDeleteArgs>(args: SelectSubset<T, TechnicianFieldReportDeleteArgs<ExtArgs>>): Prisma__TechnicianFieldReportClient<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TechnicianFieldReport.
     * @param {TechnicianFieldReportUpdateArgs} args - Arguments to update one TechnicianFieldReport.
     * @example
     * // Update one TechnicianFieldReport
     * const technicianFieldReport = await prisma.technicianFieldReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicianFieldReportUpdateArgs>(args: SelectSubset<T, TechnicianFieldReportUpdateArgs<ExtArgs>>): Prisma__TechnicianFieldReportClient<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TechnicianFieldReports.
     * @param {TechnicianFieldReportDeleteManyArgs} args - Arguments to filter TechnicianFieldReports to delete.
     * @example
     * // Delete a few TechnicianFieldReports
     * const { count } = await prisma.technicianFieldReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicianFieldReportDeleteManyArgs>(args?: SelectSubset<T, TechnicianFieldReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicianFieldReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFieldReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnicianFieldReports
     * const technicianFieldReport = await prisma.technicianFieldReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicianFieldReportUpdateManyArgs>(args: SelectSubset<T, TechnicianFieldReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TechnicianFieldReport.
     * @param {TechnicianFieldReportUpsertArgs} args - Arguments to update or create a TechnicianFieldReport.
     * @example
     * // Update or create a TechnicianFieldReport
     * const technicianFieldReport = await prisma.technicianFieldReport.upsert({
     *   create: {
     *     // ... data to create a TechnicianFieldReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnicianFieldReport we want to update
     *   }
     * })
     */
    upsert<T extends TechnicianFieldReportUpsertArgs>(args: SelectSubset<T, TechnicianFieldReportUpsertArgs<ExtArgs>>): Prisma__TechnicianFieldReportClient<$Result.GetResult<Prisma.$TechnicianFieldReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more TechnicianFieldReports that matches the filter.
     * @param {TechnicianFieldReportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const technicianFieldReport = await prisma.technicianFieldReport.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: TechnicianFieldReportFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TechnicianFieldReport.
     * @param {TechnicianFieldReportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const technicianFieldReport = await prisma.technicianFieldReport.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TechnicianFieldReportAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TechnicianFieldReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFieldReportCountArgs} args - Arguments to filter TechnicianFieldReports to count.
     * @example
     * // Count the number of TechnicianFieldReports
     * const count = await prisma.technicianFieldReport.count({
     *   where: {
     *     // ... the filter for the TechnicianFieldReports we want to count
     *   }
     * })
    **/
    count<T extends TechnicianFieldReportCountArgs>(
      args?: Subset<T, TechnicianFieldReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianFieldReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechnicianFieldReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFieldReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnicianFieldReportAggregateArgs>(args: Subset<T, TechnicianFieldReportAggregateArgs>): Prisma.PrismaPromise<GetTechnicianFieldReportAggregateType<T>>

    /**
     * Group by TechnicianFieldReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFieldReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnicianFieldReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicianFieldReportGroupByArgs['orderBy'] }
        : { orderBy?: TechnicianFieldReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnicianFieldReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianFieldReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechnicianFieldReport model
   */
  readonly fields: TechnicianFieldReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechnicianFieldReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicianFieldReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technician<T extends TechnicianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnicianDefaultArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TechnicianFieldReport model
   */ 
  interface TechnicianFieldReportFieldRefs {
    readonly id: FieldRef<"TechnicianFieldReport", 'String'>
    readonly technicianId: FieldRef<"TechnicianFieldReport", 'String'>
    readonly ticketId: FieldRef<"TechnicianFieldReport", 'String'>
    readonly date: FieldRef<"TechnicianFieldReport", 'DateTime'>
    readonly status: FieldRef<"TechnicianFieldReport", 'String'>
    readonly description: FieldRef<"TechnicianFieldReport", 'String'>
    readonly timeOnSite: FieldRef<"TechnicianFieldReport", 'String'>
    readonly parts: FieldRef<"TechnicianFieldReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TechnicianFieldReport findUnique
   */
  export type TechnicianFieldReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianFieldReport to fetch.
     */
    where: TechnicianFieldReportWhereUniqueInput
  }

  /**
   * TechnicianFieldReport findUniqueOrThrow
   */
  export type TechnicianFieldReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianFieldReport to fetch.
     */
    where: TechnicianFieldReportWhereUniqueInput
  }

  /**
   * TechnicianFieldReport findFirst
   */
  export type TechnicianFieldReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianFieldReport to fetch.
     */
    where?: TechnicianFieldReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianFieldReports to fetch.
     */
    orderBy?: TechnicianFieldReportOrderByWithRelationInput | TechnicianFieldReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicianFieldReports.
     */
    cursor?: TechnicianFieldReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianFieldReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianFieldReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicianFieldReports.
     */
    distinct?: TechnicianFieldReportScalarFieldEnum | TechnicianFieldReportScalarFieldEnum[]
  }

  /**
   * TechnicianFieldReport findFirstOrThrow
   */
  export type TechnicianFieldReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianFieldReport to fetch.
     */
    where?: TechnicianFieldReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianFieldReports to fetch.
     */
    orderBy?: TechnicianFieldReportOrderByWithRelationInput | TechnicianFieldReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicianFieldReports.
     */
    cursor?: TechnicianFieldReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianFieldReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianFieldReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicianFieldReports.
     */
    distinct?: TechnicianFieldReportScalarFieldEnum | TechnicianFieldReportScalarFieldEnum[]
  }

  /**
   * TechnicianFieldReport findMany
   */
  export type TechnicianFieldReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianFieldReports to fetch.
     */
    where?: TechnicianFieldReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianFieldReports to fetch.
     */
    orderBy?: TechnicianFieldReportOrderByWithRelationInput | TechnicianFieldReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechnicianFieldReports.
     */
    cursor?: TechnicianFieldReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianFieldReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianFieldReports.
     */
    skip?: number
    distinct?: TechnicianFieldReportScalarFieldEnum | TechnicianFieldReportScalarFieldEnum[]
  }

  /**
   * TechnicianFieldReport create
   */
  export type TechnicianFieldReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * The data needed to create a TechnicianFieldReport.
     */
    data: XOR<TechnicianFieldReportCreateInput, TechnicianFieldReportUncheckedCreateInput>
  }

  /**
   * TechnicianFieldReport createMany
   */
  export type TechnicianFieldReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechnicianFieldReports.
     */
    data: TechnicianFieldReportCreateManyInput | TechnicianFieldReportCreateManyInput[]
  }

  /**
   * TechnicianFieldReport update
   */
  export type TechnicianFieldReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * The data needed to update a TechnicianFieldReport.
     */
    data: XOR<TechnicianFieldReportUpdateInput, TechnicianFieldReportUncheckedUpdateInput>
    /**
     * Choose, which TechnicianFieldReport to update.
     */
    where: TechnicianFieldReportWhereUniqueInput
  }

  /**
   * TechnicianFieldReport updateMany
   */
  export type TechnicianFieldReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechnicianFieldReports.
     */
    data: XOR<TechnicianFieldReportUpdateManyMutationInput, TechnicianFieldReportUncheckedUpdateManyInput>
    /**
     * Filter which TechnicianFieldReports to update
     */
    where?: TechnicianFieldReportWhereInput
  }

  /**
   * TechnicianFieldReport upsert
   */
  export type TechnicianFieldReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * The filter to search for the TechnicianFieldReport to update in case it exists.
     */
    where: TechnicianFieldReportWhereUniqueInput
    /**
     * In case the TechnicianFieldReport found by the `where` argument doesn't exist, create a new TechnicianFieldReport with this data.
     */
    create: XOR<TechnicianFieldReportCreateInput, TechnicianFieldReportUncheckedCreateInput>
    /**
     * In case the TechnicianFieldReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicianFieldReportUpdateInput, TechnicianFieldReportUncheckedUpdateInput>
  }

  /**
   * TechnicianFieldReport delete
   */
  export type TechnicianFieldReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
    /**
     * Filter which TechnicianFieldReport to delete.
     */
    where: TechnicianFieldReportWhereUniqueInput
  }

  /**
   * TechnicianFieldReport deleteMany
   */
  export type TechnicianFieldReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicianFieldReports to delete
     */
    where?: TechnicianFieldReportWhereInput
  }

  /**
   * TechnicianFieldReport findRaw
   */
  export type TechnicianFieldReportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TechnicianFieldReport aggregateRaw
   */
  export type TechnicianFieldReportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TechnicianFieldReport without action
   */
  export type TechnicianFieldReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianFieldReport
     */
    select?: TechnicianFieldReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianFieldReportInclude<ExtArgs> | null
  }


  /**
   * Model TechnicianMetric
   */

  export type AggregateTechnicianMetric = {
    _count: TechnicianMetricCountAggregateOutputType | null
    _avg: TechnicianMetricAvgAggregateOutputType | null
    _sum: TechnicianMetricSumAggregateOutputType | null
    _min: TechnicianMetricMinAggregateOutputType | null
    _max: TechnicianMetricMaxAggregateOutputType | null
  }

  export type TechnicianMetricAvgAggregateOutputType = {
    benchmark: number | null
    score: number | null
  }

  export type TechnicianMetricSumAggregateOutputType = {
    benchmark: number | null
    score: number | null
  }

  export type TechnicianMetricMinAggregateOutputType = {
    id: string | null
    technicianId: string | null
    label: string | null
    benchmark: number | null
    score: number | null
  }

  export type TechnicianMetricMaxAggregateOutputType = {
    id: string | null
    technicianId: string | null
    label: string | null
    benchmark: number | null
    score: number | null
  }

  export type TechnicianMetricCountAggregateOutputType = {
    id: number
    technicianId: number
    label: number
    benchmark: number
    score: number
    _all: number
  }


  export type TechnicianMetricAvgAggregateInputType = {
    benchmark?: true
    score?: true
  }

  export type TechnicianMetricSumAggregateInputType = {
    benchmark?: true
    score?: true
  }

  export type TechnicianMetricMinAggregateInputType = {
    id?: true
    technicianId?: true
    label?: true
    benchmark?: true
    score?: true
  }

  export type TechnicianMetricMaxAggregateInputType = {
    id?: true
    technicianId?: true
    label?: true
    benchmark?: true
    score?: true
  }

  export type TechnicianMetricCountAggregateInputType = {
    id?: true
    technicianId?: true
    label?: true
    benchmark?: true
    score?: true
    _all?: true
  }

  export type TechnicianMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicianMetric to aggregate.
     */
    where?: TechnicianMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianMetrics to fetch.
     */
    orderBy?: TechnicianMetricOrderByWithRelationInput | TechnicianMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicianMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechnicianMetrics
    **/
    _count?: true | TechnicianMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicianMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicianMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianMetricMaxAggregateInputType
  }

  export type GetTechnicianMetricAggregateType<T extends TechnicianMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnicianMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnicianMetric[P]>
      : GetScalarType<T[P], AggregateTechnicianMetric[P]>
  }




  export type TechnicianMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianMetricWhereInput
    orderBy?: TechnicianMetricOrderByWithAggregationInput | TechnicianMetricOrderByWithAggregationInput[]
    by: TechnicianMetricScalarFieldEnum[] | TechnicianMetricScalarFieldEnum
    having?: TechnicianMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianMetricCountAggregateInputType | true
    _avg?: TechnicianMetricAvgAggregateInputType
    _sum?: TechnicianMetricSumAggregateInputType
    _min?: TechnicianMetricMinAggregateInputType
    _max?: TechnicianMetricMaxAggregateInputType
  }

  export type TechnicianMetricGroupByOutputType = {
    id: string
    technicianId: string
    label: string
    benchmark: number
    score: number
    _count: TechnicianMetricCountAggregateOutputType | null
    _avg: TechnicianMetricAvgAggregateOutputType | null
    _sum: TechnicianMetricSumAggregateOutputType | null
    _min: TechnicianMetricMinAggregateOutputType | null
    _max: TechnicianMetricMaxAggregateOutputType | null
  }

  type GetTechnicianMetricGroupByPayload<T extends TechnicianMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianMetricGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianMetricGroupByOutputType[P]>
        }
      >
    >


  export type TechnicianMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    technicianId?: boolean
    label?: boolean
    benchmark?: boolean
    score?: boolean
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technicianMetric"]>


  export type TechnicianMetricSelectScalar = {
    id?: boolean
    technicianId?: boolean
    label?: boolean
    benchmark?: boolean
    score?: boolean
  }

  export type TechnicianMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technician?: boolean | TechnicianDefaultArgs<ExtArgs>
  }

  export type $TechnicianMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TechnicianMetric"
    objects: {
      technician: Prisma.$TechnicianPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      technicianId: string
      label: string
      benchmark: number
      score: number
    }, ExtArgs["result"]["technicianMetric"]>
    composites: {}
  }

  type TechnicianMetricGetPayload<S extends boolean | null | undefined | TechnicianMetricDefaultArgs> = $Result.GetResult<Prisma.$TechnicianMetricPayload, S>

  type TechnicianMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TechnicianMetricFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TechnicianMetricCountAggregateInputType | true
    }

  export interface TechnicianMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechnicianMetric'], meta: { name: 'TechnicianMetric' } }
    /**
     * Find zero or one TechnicianMetric that matches the filter.
     * @param {TechnicianMetricFindUniqueArgs} args - Arguments to find a TechnicianMetric
     * @example
     * // Get one TechnicianMetric
     * const technicianMetric = await prisma.technicianMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicianMetricFindUniqueArgs>(args: SelectSubset<T, TechnicianMetricFindUniqueArgs<ExtArgs>>): Prisma__TechnicianMetricClient<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TechnicianMetric that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TechnicianMetricFindUniqueOrThrowArgs} args - Arguments to find a TechnicianMetric
     * @example
     * // Get one TechnicianMetric
     * const technicianMetric = await prisma.technicianMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicianMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicianMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicianMetricClient<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TechnicianMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianMetricFindFirstArgs} args - Arguments to find a TechnicianMetric
     * @example
     * // Get one TechnicianMetric
     * const technicianMetric = await prisma.technicianMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicianMetricFindFirstArgs>(args?: SelectSubset<T, TechnicianMetricFindFirstArgs<ExtArgs>>): Prisma__TechnicianMetricClient<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TechnicianMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianMetricFindFirstOrThrowArgs} args - Arguments to find a TechnicianMetric
     * @example
     * // Get one TechnicianMetric
     * const technicianMetric = await prisma.technicianMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicianMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicianMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicianMetricClient<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TechnicianMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnicianMetrics
     * const technicianMetrics = await prisma.technicianMetric.findMany()
     * 
     * // Get first 10 TechnicianMetrics
     * const technicianMetrics = await prisma.technicianMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianMetricWithIdOnly = await prisma.technicianMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicianMetricFindManyArgs>(args?: SelectSubset<T, TechnicianMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TechnicianMetric.
     * @param {TechnicianMetricCreateArgs} args - Arguments to create a TechnicianMetric.
     * @example
     * // Create one TechnicianMetric
     * const TechnicianMetric = await prisma.technicianMetric.create({
     *   data: {
     *     // ... data to create a TechnicianMetric
     *   }
     * })
     * 
     */
    create<T extends TechnicianMetricCreateArgs>(args: SelectSubset<T, TechnicianMetricCreateArgs<ExtArgs>>): Prisma__TechnicianMetricClient<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TechnicianMetrics.
     * @param {TechnicianMetricCreateManyArgs} args - Arguments to create many TechnicianMetrics.
     * @example
     * // Create many TechnicianMetrics
     * const technicianMetric = await prisma.technicianMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicianMetricCreateManyArgs>(args?: SelectSubset<T, TechnicianMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TechnicianMetric.
     * @param {TechnicianMetricDeleteArgs} args - Arguments to delete one TechnicianMetric.
     * @example
     * // Delete one TechnicianMetric
     * const TechnicianMetric = await prisma.technicianMetric.delete({
     *   where: {
     *     // ... filter to delete one TechnicianMetric
     *   }
     * })
     * 
     */
    delete<T extends TechnicianMetricDeleteArgs>(args: SelectSubset<T, TechnicianMetricDeleteArgs<ExtArgs>>): Prisma__TechnicianMetricClient<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TechnicianMetric.
     * @param {TechnicianMetricUpdateArgs} args - Arguments to update one TechnicianMetric.
     * @example
     * // Update one TechnicianMetric
     * const technicianMetric = await prisma.technicianMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicianMetricUpdateArgs>(args: SelectSubset<T, TechnicianMetricUpdateArgs<ExtArgs>>): Prisma__TechnicianMetricClient<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TechnicianMetrics.
     * @param {TechnicianMetricDeleteManyArgs} args - Arguments to filter TechnicianMetrics to delete.
     * @example
     * // Delete a few TechnicianMetrics
     * const { count } = await prisma.technicianMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicianMetricDeleteManyArgs>(args?: SelectSubset<T, TechnicianMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicianMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnicianMetrics
     * const technicianMetric = await prisma.technicianMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicianMetricUpdateManyArgs>(args: SelectSubset<T, TechnicianMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TechnicianMetric.
     * @param {TechnicianMetricUpsertArgs} args - Arguments to update or create a TechnicianMetric.
     * @example
     * // Update or create a TechnicianMetric
     * const technicianMetric = await prisma.technicianMetric.upsert({
     *   create: {
     *     // ... data to create a TechnicianMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnicianMetric we want to update
     *   }
     * })
     */
    upsert<T extends TechnicianMetricUpsertArgs>(args: SelectSubset<T, TechnicianMetricUpsertArgs<ExtArgs>>): Prisma__TechnicianMetricClient<$Result.GetResult<Prisma.$TechnicianMetricPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more TechnicianMetrics that matches the filter.
     * @param {TechnicianMetricFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const technicianMetric = await prisma.technicianMetric.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: TechnicianMetricFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TechnicianMetric.
     * @param {TechnicianMetricAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const technicianMetric = await prisma.technicianMetric.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TechnicianMetricAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TechnicianMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianMetricCountArgs} args - Arguments to filter TechnicianMetrics to count.
     * @example
     * // Count the number of TechnicianMetrics
     * const count = await prisma.technicianMetric.count({
     *   where: {
     *     // ... the filter for the TechnicianMetrics we want to count
     *   }
     * })
    **/
    count<T extends TechnicianMetricCountArgs>(
      args?: Subset<T, TechnicianMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechnicianMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnicianMetricAggregateArgs>(args: Subset<T, TechnicianMetricAggregateArgs>): Prisma.PrismaPromise<GetTechnicianMetricAggregateType<T>>

    /**
     * Group by TechnicianMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianMetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnicianMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicianMetricGroupByArgs['orderBy'] }
        : { orderBy?: TechnicianMetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnicianMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechnicianMetric model
   */
  readonly fields: TechnicianMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechnicianMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicianMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technician<T extends TechnicianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnicianDefaultArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TechnicianMetric model
   */ 
  interface TechnicianMetricFieldRefs {
    readonly id: FieldRef<"TechnicianMetric", 'String'>
    readonly technicianId: FieldRef<"TechnicianMetric", 'String'>
    readonly label: FieldRef<"TechnicianMetric", 'String'>
    readonly benchmark: FieldRef<"TechnicianMetric", 'Float'>
    readonly score: FieldRef<"TechnicianMetric", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TechnicianMetric findUnique
   */
  export type TechnicianMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianMetric to fetch.
     */
    where: TechnicianMetricWhereUniqueInput
  }

  /**
   * TechnicianMetric findUniqueOrThrow
   */
  export type TechnicianMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianMetric to fetch.
     */
    where: TechnicianMetricWhereUniqueInput
  }

  /**
   * TechnicianMetric findFirst
   */
  export type TechnicianMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianMetric to fetch.
     */
    where?: TechnicianMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianMetrics to fetch.
     */
    orderBy?: TechnicianMetricOrderByWithRelationInput | TechnicianMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicianMetrics.
     */
    cursor?: TechnicianMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicianMetrics.
     */
    distinct?: TechnicianMetricScalarFieldEnum | TechnicianMetricScalarFieldEnum[]
  }

  /**
   * TechnicianMetric findFirstOrThrow
   */
  export type TechnicianMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianMetric to fetch.
     */
    where?: TechnicianMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianMetrics to fetch.
     */
    orderBy?: TechnicianMetricOrderByWithRelationInput | TechnicianMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicianMetrics.
     */
    cursor?: TechnicianMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicianMetrics.
     */
    distinct?: TechnicianMetricScalarFieldEnum | TechnicianMetricScalarFieldEnum[]
  }

  /**
   * TechnicianMetric findMany
   */
  export type TechnicianMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * Filter, which TechnicianMetrics to fetch.
     */
    where?: TechnicianMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicianMetrics to fetch.
     */
    orderBy?: TechnicianMetricOrderByWithRelationInput | TechnicianMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechnicianMetrics.
     */
    cursor?: TechnicianMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicianMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicianMetrics.
     */
    skip?: number
    distinct?: TechnicianMetricScalarFieldEnum | TechnicianMetricScalarFieldEnum[]
  }

  /**
   * TechnicianMetric create
   */
  export type TechnicianMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a TechnicianMetric.
     */
    data: XOR<TechnicianMetricCreateInput, TechnicianMetricUncheckedCreateInput>
  }

  /**
   * TechnicianMetric createMany
   */
  export type TechnicianMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TechnicianMetrics.
     */
    data: TechnicianMetricCreateManyInput | TechnicianMetricCreateManyInput[]
  }

  /**
   * TechnicianMetric update
   */
  export type TechnicianMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a TechnicianMetric.
     */
    data: XOR<TechnicianMetricUpdateInput, TechnicianMetricUncheckedUpdateInput>
    /**
     * Choose, which TechnicianMetric to update.
     */
    where: TechnicianMetricWhereUniqueInput
  }

  /**
   * TechnicianMetric updateMany
   */
  export type TechnicianMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechnicianMetrics.
     */
    data: XOR<TechnicianMetricUpdateManyMutationInput, TechnicianMetricUncheckedUpdateManyInput>
    /**
     * Filter which TechnicianMetrics to update
     */
    where?: TechnicianMetricWhereInput
  }

  /**
   * TechnicianMetric upsert
   */
  export type TechnicianMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the TechnicianMetric to update in case it exists.
     */
    where: TechnicianMetricWhereUniqueInput
    /**
     * In case the TechnicianMetric found by the `where` argument doesn't exist, create a new TechnicianMetric with this data.
     */
    create: XOR<TechnicianMetricCreateInput, TechnicianMetricUncheckedCreateInput>
    /**
     * In case the TechnicianMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicianMetricUpdateInput, TechnicianMetricUncheckedUpdateInput>
  }

  /**
   * TechnicianMetric delete
   */
  export type TechnicianMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
    /**
     * Filter which TechnicianMetric to delete.
     */
    where: TechnicianMetricWhereUniqueInput
  }

  /**
   * TechnicianMetric deleteMany
   */
  export type TechnicianMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicianMetrics to delete
     */
    where?: TechnicianMetricWhereInput
  }

  /**
   * TechnicianMetric findRaw
   */
  export type TechnicianMetricFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TechnicianMetric aggregateRaw
   */
  export type TechnicianMetricAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TechnicianMetric without action
   */
  export type TechnicianMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicianMetric
     */
    select?: TechnicianMetricSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechnicianMetricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    name: 'name',
    email: 'email',
    type: 'type',
    planId: 'planId',
    usage: 'usage',
    balance: 'balance',
    status: 'status',
    area: 'area',
    since: 'since',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    speed: 'speed',
    cost: 'cost',
    status: 'status'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const TechnicianScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    location: 'location',
    phone: 'phone',
    status: 'status',
    rating: 'rating',
    currentJobId: 'currentJobId',
    completedJobsCount: 'completedJobsCount',
    queueCount: 'queueCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TechnicianScalarFieldEnum = (typeof TechnicianScalarFieldEnum)[keyof typeof TechnicianScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    assignedToId: 'assignedToId',
    ticketNumber: 'ticketNumber',
    issue: 'issue',
    category: 'category',
    priority: 'priority',
    status: 'status',
    sla: 'sla',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    technicianId: 'technicianId',
    subscriber: 'subscriber',
    address: 'address',
    phone: 'phone',
    priority: 'priority',
    status: 'status',
    timeLeft: 'timeLeft',
    issue: 'issue',
    accessNote: 'accessNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    planId: 'planId',
    invoiceNumber: 'invoiceNumber',
    email: 'email',
    contact: 'contact',
    amount: 'amount',
    dueDate: 'dueDate',
    paymentMethod: 'paymentMethod',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    invoiceId: 'invoiceId',
    period: 'period',
    amount: 'amount',
    due: 'due',
    method: 'method',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const UpgradeRequestScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    initialPlanId: 'initialPlanId',
    finalPlanId: 'finalPlanId',
    requestedAt: 'requestedAt',
    status: 'status'
  };

  export type UpgradeRequestScalarFieldEnum = (typeof UpgradeRequestScalarFieldEnum)[keyof typeof UpgradeRequestScalarFieldEnum]


  export const TechnicianReviewScalarFieldEnum: {
    id: 'id',
    technicianId: 'technicianId',
    reviewer: 'reviewer',
    rating: 'rating',
    date: 'date',
    comment: 'comment'
  };

  export type TechnicianReviewScalarFieldEnum = (typeof TechnicianReviewScalarFieldEnum)[keyof typeof TechnicianReviewScalarFieldEnum]


  export const TechnicianFieldReportScalarFieldEnum: {
    id: 'id',
    technicianId: 'technicianId',
    ticketId: 'ticketId',
    date: 'date',
    status: 'status',
    description: 'description',
    timeOnSite: 'timeOnSite',
    parts: 'parts'
  };

  export type TechnicianFieldReportScalarFieldEnum = (typeof TechnicianFieldReportScalarFieldEnum)[keyof typeof TechnicianFieldReportScalarFieldEnum]


  export const TechnicianMetricScalarFieldEnum: {
    id: 'id',
    technicianId: 'technicianId',
    label: 'label',
    benchmark: 'benchmark',
    score: 'score'
  };

  export type TechnicianMetricScalarFieldEnum = (typeof TechnicianMetricScalarFieldEnum)[keyof typeof TechnicianMetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CustomerType'
   */
  export type EnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType'>
    


  /**
   * Reference to a field of type 'CustomerType[]'
   */
  export type ListEnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType[]'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TechnicianStatus'
   */
  export type EnumTechnicianStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicianStatus'>
    


  /**
   * Reference to a field of type 'TechnicianStatus[]'
   */
  export type ListEnumTechnicianStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicianStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'JobPriority'
   */
  export type EnumJobPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobPriority'>
    


  /**
   * Reference to a field of type 'JobPriority[]'
   */
  export type ListEnumJobPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobPriority[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'UpgradeStatus'
   */
  export type EnumUpgradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UpgradeStatus'>
    


  /**
   * Reference to a field of type 'UpgradeStatus[]'
   */
  export type ListEnumUpgradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UpgradeStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    technician?: XOR<TechnicianNullableRelationFilter, TechnicianWhereInput> | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    technician?: TechnicianOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    technician?: XOR<TechnicianNullableRelationFilter, TechnicianWhereInput> | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    accountId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    type?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    planId?: StringNullableFilter<"Customer"> | string | null
    usage?: StringNullableFilter<"Customer"> | string | null
    balance?: StringNullableFilter<"Customer"> | string | null
    status?: EnumPlanStatusFilter<"Customer"> | $Enums.PlanStatus
    area?: StringNullableFilter<"Customer"> | string | null
    since?: DateTimeFilter<"Customer"> | Date | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    tickets?: TicketListRelationFilter
    invoices?: InvoiceListRelationFilter
    payments?: PaymentListRelationFilter
    requests?: UpgradeRequestListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    planId?: SortOrder
    usage?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    area?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    requests?: UpgradeRequestOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    accountId?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    type?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    planId?: StringNullableFilter<"Customer"> | string | null
    usage?: StringNullableFilter<"Customer"> | string | null
    balance?: StringNullableFilter<"Customer"> | string | null
    status?: EnumPlanStatusFilter<"Customer"> | $Enums.PlanStatus
    area?: StringNullableFilter<"Customer"> | string | null
    since?: DateTimeFilter<"Customer"> | Date | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    tickets?: TicketListRelationFilter
    invoices?: InvoiceListRelationFilter
    payments?: PaymentListRelationFilter
    requests?: UpgradeRequestListRelationFilter
  }, "id" | "userId" | "accountId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    planId?: SortOrder
    usage?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    area?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    userId?: StringWithAggregatesFilter<"Customer"> | string
    accountId?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    type?: EnumCustomerTypeWithAggregatesFilter<"Customer"> | $Enums.CustomerType
    planId?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    usage?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    balance?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    status?: EnumPlanStatusWithAggregatesFilter<"Customer"> | $Enums.PlanStatus
    area?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    since?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    type?: StringFilter<"Plan"> | string
    speed?: StringNullableFilter<"Plan"> | string | null
    cost?: IntNullableFilter<"Plan"> | number | null
    status?: EnumPlanStatusFilter<"Plan"> | $Enums.PlanStatus
    customers?: CustomerListRelationFilter
    invoices?: InvoiceListRelationFilter
    requests?: UpgradeRequestListRelationFilter
    finalPlans?: UpgradeRequestListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    speed?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    requests?: UpgradeRequestOrderByRelationAggregateInput
    finalPlans?: UpgradeRequestOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    type?: StringFilter<"Plan"> | string
    speed?: StringNullableFilter<"Plan"> | string | null
    cost?: IntNullableFilter<"Plan"> | number | null
    status?: EnumPlanStatusFilter<"Plan"> | $Enums.PlanStatus
    customers?: CustomerListRelationFilter
    invoices?: InvoiceListRelationFilter
    requests?: UpgradeRequestListRelationFilter
    finalPlans?: UpgradeRequestListRelationFilter
  }, "id" | "name">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    speed?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    type?: StringWithAggregatesFilter<"Plan"> | string
    speed?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    cost?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    status?: EnumPlanStatusWithAggregatesFilter<"Plan"> | $Enums.PlanStatus
  }

  export type TechnicianWhereInput = {
    AND?: TechnicianWhereInput | TechnicianWhereInput[]
    OR?: TechnicianWhereInput[]
    NOT?: TechnicianWhereInput | TechnicianWhereInput[]
    id?: StringFilter<"Technician"> | string
    userId?: StringFilter<"Technician"> | string
    name?: StringFilter<"Technician"> | string
    location?: StringFilter<"Technician"> | string
    phone?: StringFilter<"Technician"> | string
    status?: EnumTechnicianStatusFilter<"Technician"> | $Enums.TechnicianStatus
    rating?: FloatFilter<"Technician"> | number
    currentJobId?: StringNullableFilter<"Technician"> | string | null
    completedJobsCount?: IntFilter<"Technician"> | number
    queueCount?: IntFilter<"Technician"> | number
    createdAt?: DateTimeFilter<"Technician"> | Date | string
    updatedAt?: DateTimeFilter<"Technician"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    jobs?: JobListRelationFilter
    tickets?: TicketListRelationFilter
    fieldReports?: TechnicianFieldReportListRelationFilter
    reviews?: TechnicianReviewListRelationFilter
    metrics?: TechnicianMetricListRelationFilter
  }

  export type TechnicianOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    currentJobId?: SortOrder
    completedJobsCount?: SortOrder
    queueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jobs?: JobOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    fieldReports?: TechnicianFieldReportOrderByRelationAggregateInput
    reviews?: TechnicianReviewOrderByRelationAggregateInput
    metrics?: TechnicianMetricOrderByRelationAggregateInput
  }

  export type TechnicianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TechnicianWhereInput | TechnicianWhereInput[]
    OR?: TechnicianWhereInput[]
    NOT?: TechnicianWhereInput | TechnicianWhereInput[]
    name?: StringFilter<"Technician"> | string
    location?: StringFilter<"Technician"> | string
    phone?: StringFilter<"Technician"> | string
    status?: EnumTechnicianStatusFilter<"Technician"> | $Enums.TechnicianStatus
    rating?: FloatFilter<"Technician"> | number
    currentJobId?: StringNullableFilter<"Technician"> | string | null
    completedJobsCount?: IntFilter<"Technician"> | number
    queueCount?: IntFilter<"Technician"> | number
    createdAt?: DateTimeFilter<"Technician"> | Date | string
    updatedAt?: DateTimeFilter<"Technician"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    jobs?: JobListRelationFilter
    tickets?: TicketListRelationFilter
    fieldReports?: TechnicianFieldReportListRelationFilter
    reviews?: TechnicianReviewListRelationFilter
    metrics?: TechnicianMetricListRelationFilter
  }, "id" | "userId">

  export type TechnicianOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    currentJobId?: SortOrder
    completedJobsCount?: SortOrder
    queueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TechnicianCountOrderByAggregateInput
    _avg?: TechnicianAvgOrderByAggregateInput
    _max?: TechnicianMaxOrderByAggregateInput
    _min?: TechnicianMinOrderByAggregateInput
    _sum?: TechnicianSumOrderByAggregateInput
  }

  export type TechnicianScalarWhereWithAggregatesInput = {
    AND?: TechnicianScalarWhereWithAggregatesInput | TechnicianScalarWhereWithAggregatesInput[]
    OR?: TechnicianScalarWhereWithAggregatesInput[]
    NOT?: TechnicianScalarWhereWithAggregatesInput | TechnicianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Technician"> | string
    userId?: StringWithAggregatesFilter<"Technician"> | string
    name?: StringWithAggregatesFilter<"Technician"> | string
    location?: StringWithAggregatesFilter<"Technician"> | string
    phone?: StringWithAggregatesFilter<"Technician"> | string
    status?: EnumTechnicianStatusWithAggregatesFilter<"Technician"> | $Enums.TechnicianStatus
    rating?: FloatWithAggregatesFilter<"Technician"> | number
    currentJobId?: StringNullableWithAggregatesFilter<"Technician"> | string | null
    completedJobsCount?: IntWithAggregatesFilter<"Technician"> | number
    queueCount?: IntWithAggregatesFilter<"Technician"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Technician"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Technician"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    customerId?: StringFilter<"Ticket"> | string
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    ticketNumber?: StringFilter<"Ticket"> | string
    issue?: StringFilter<"Ticket"> | string
    category?: StringFilter<"Ticket"> | string
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    sla?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    assignedTo?: XOR<TechnicianNullableRelationFilter, TechnicianWhereInput> | null
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
    fieldReports?: TechnicianFieldReportListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    assignedToId?: SortOrder
    ticketNumber?: SortOrder
    issue?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    sla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    assignedTo?: TechnicianOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
    fieldReports?: TechnicianFieldReportOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketNumber?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    customerId?: StringFilter<"Ticket"> | string
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    issue?: StringFilter<"Ticket"> | string
    category?: StringFilter<"Ticket"> | string
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    sla?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    assignedTo?: XOR<TechnicianNullableRelationFilter, TechnicianWhereInput> | null
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
    fieldReports?: TechnicianFieldReportListRelationFilter
  }, "id" | "ticketNumber">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    assignedToId?: SortOrder
    ticketNumber?: SortOrder
    issue?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    sla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    customerId?: StringWithAggregatesFilter<"Ticket"> | string
    assignedToId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    ticketNumber?: StringWithAggregatesFilter<"Ticket"> | string
    issue?: StringWithAggregatesFilter<"Ticket"> | string
    category?: StringWithAggregatesFilter<"Ticket"> | string
    priority?: EnumTicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    sla?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    ticketId?: StringFilter<"Job"> | string
    technicianId?: StringNullableFilter<"Job"> | string | null
    subscriber?: StringFilter<"Job"> | string
    address?: StringFilter<"Job"> | string
    phone?: StringFilter<"Job"> | string
    priority?: EnumJobPriorityFilter<"Job"> | $Enums.JobPriority
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    timeLeft?: StringNullableFilter<"Job"> | string | null
    issue?: StringFilter<"Job"> | string
    accessNote?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
    technician?: XOR<TechnicianNullableRelationFilter, TechnicianWhereInput> | null
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    technicianId?: SortOrder
    subscriber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    timeLeft?: SortOrder
    issue?: SortOrder
    accessNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    technician?: TechnicianOrderByWithRelationInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketId?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    technicianId?: StringNullableFilter<"Job"> | string | null
    subscriber?: StringFilter<"Job"> | string
    address?: StringFilter<"Job"> | string
    phone?: StringFilter<"Job"> | string
    priority?: EnumJobPriorityFilter<"Job"> | $Enums.JobPriority
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    timeLeft?: StringNullableFilter<"Job"> | string | null
    issue?: StringFilter<"Job"> | string
    accessNote?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
    technician?: XOR<TechnicianNullableRelationFilter, TechnicianWhereInput> | null
  }, "id" | "ticketId">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    technicianId?: SortOrder
    subscriber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    timeLeft?: SortOrder
    issue?: SortOrder
    accessNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    ticketId?: StringWithAggregatesFilter<"Job"> | string
    technicianId?: StringNullableWithAggregatesFilter<"Job"> | string | null
    subscriber?: StringWithAggregatesFilter<"Job"> | string
    address?: StringWithAggregatesFilter<"Job"> | string
    phone?: StringWithAggregatesFilter<"Job"> | string
    priority?: EnumJobPriorityWithAggregatesFilter<"Job"> | $Enums.JobPriority
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    timeLeft?: StringNullableWithAggregatesFilter<"Job"> | string | null
    issue?: StringWithAggregatesFilter<"Job"> | string
    accessNote?: StringNullableWithAggregatesFilter<"Job"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    planId?: StringNullableFilter<"Invoice"> | string | null
    invoiceNumber?: StringFilter<"Invoice"> | string
    email?: StringFilter<"Invoice"> | string
    contact?: StringFilter<"Invoice"> | string
    amount?: IntFilter<"Invoice"> | number
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    paymentMethod?: StringNullableFilter<"Invoice"> | string | null
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    invoiceNumber?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    customerId?: StringFilter<"Invoice"> | string
    planId?: StringNullableFilter<"Invoice"> | string | null
    email?: StringFilter<"Invoice"> | string
    contact?: StringFilter<"Invoice"> | string
    amount?: IntFilter<"Invoice"> | number
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    paymentMethod?: StringNullableFilter<"Invoice"> | string | null
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id" | "invoiceNumber">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    invoiceNumber?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    customerId?: StringWithAggregatesFilter<"Invoice"> | string
    planId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    email?: StringWithAggregatesFilter<"Invoice"> | string
    contact?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: IntWithAggregatesFilter<"Invoice"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    customerId?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    period?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    due?: DateTimeNullableFilter<"Payment"> | Date | string | null
    method?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    period?: SortOrder
    amount?: SortOrder
    due?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    customerId?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    period?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    due?: DateTimeNullableFilter<"Payment"> | Date | string | null
    method?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    period?: SortOrder
    amount?: SortOrder
    due?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    customerId?: StringWithAggregatesFilter<"Payment"> | string
    invoiceId?: StringWithAggregatesFilter<"Payment"> | string
    period?: StringWithAggregatesFilter<"Payment"> | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    due?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UpgradeRequestWhereInput = {
    AND?: UpgradeRequestWhereInput | UpgradeRequestWhereInput[]
    OR?: UpgradeRequestWhereInput[]
    NOT?: UpgradeRequestWhereInput | UpgradeRequestWhereInput[]
    id?: StringFilter<"UpgradeRequest"> | string
    customerId?: StringFilter<"UpgradeRequest"> | string
    initialPlanId?: StringNullableFilter<"UpgradeRequest"> | string | null
    finalPlanId?: StringNullableFilter<"UpgradeRequest"> | string | null
    requestedAt?: DateTimeFilter<"UpgradeRequest"> | Date | string
    status?: EnumUpgradeStatusFilter<"UpgradeRequest"> | $Enums.UpgradeStatus
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    initialPlan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    finalPlan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
  }

  export type UpgradeRequestOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    initialPlanId?: SortOrder
    finalPlanId?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    initialPlan?: PlanOrderByWithRelationInput
    finalPlan?: PlanOrderByWithRelationInput
  }

  export type UpgradeRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UpgradeRequestWhereInput | UpgradeRequestWhereInput[]
    OR?: UpgradeRequestWhereInput[]
    NOT?: UpgradeRequestWhereInput | UpgradeRequestWhereInput[]
    customerId?: StringFilter<"UpgradeRequest"> | string
    initialPlanId?: StringNullableFilter<"UpgradeRequest"> | string | null
    finalPlanId?: StringNullableFilter<"UpgradeRequest"> | string | null
    requestedAt?: DateTimeFilter<"UpgradeRequest"> | Date | string
    status?: EnumUpgradeStatusFilter<"UpgradeRequest"> | $Enums.UpgradeStatus
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    initialPlan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    finalPlan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
  }, "id">

  export type UpgradeRequestOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    initialPlanId?: SortOrder
    finalPlanId?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
    _count?: UpgradeRequestCountOrderByAggregateInput
    _max?: UpgradeRequestMaxOrderByAggregateInput
    _min?: UpgradeRequestMinOrderByAggregateInput
  }

  export type UpgradeRequestScalarWhereWithAggregatesInput = {
    AND?: UpgradeRequestScalarWhereWithAggregatesInput | UpgradeRequestScalarWhereWithAggregatesInput[]
    OR?: UpgradeRequestScalarWhereWithAggregatesInput[]
    NOT?: UpgradeRequestScalarWhereWithAggregatesInput | UpgradeRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UpgradeRequest"> | string
    customerId?: StringWithAggregatesFilter<"UpgradeRequest"> | string
    initialPlanId?: StringNullableWithAggregatesFilter<"UpgradeRequest"> | string | null
    finalPlanId?: StringNullableWithAggregatesFilter<"UpgradeRequest"> | string | null
    requestedAt?: DateTimeWithAggregatesFilter<"UpgradeRequest"> | Date | string
    status?: EnumUpgradeStatusWithAggregatesFilter<"UpgradeRequest"> | $Enums.UpgradeStatus
  }

  export type TechnicianReviewWhereInput = {
    AND?: TechnicianReviewWhereInput | TechnicianReviewWhereInput[]
    OR?: TechnicianReviewWhereInput[]
    NOT?: TechnicianReviewWhereInput | TechnicianReviewWhereInput[]
    id?: StringFilter<"TechnicianReview"> | string
    technicianId?: StringFilter<"TechnicianReview"> | string
    reviewer?: StringFilter<"TechnicianReview"> | string
    rating?: IntFilter<"TechnicianReview"> | number
    date?: DateTimeFilter<"TechnicianReview"> | Date | string
    comment?: StringFilter<"TechnicianReview"> | string
    technician?: XOR<TechnicianRelationFilter, TechnicianWhereInput>
  }

  export type TechnicianReviewOrderByWithRelationInput = {
    id?: SortOrder
    technicianId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    comment?: SortOrder
    technician?: TechnicianOrderByWithRelationInput
  }

  export type TechnicianReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TechnicianReviewWhereInput | TechnicianReviewWhereInput[]
    OR?: TechnicianReviewWhereInput[]
    NOT?: TechnicianReviewWhereInput | TechnicianReviewWhereInput[]
    technicianId?: StringFilter<"TechnicianReview"> | string
    reviewer?: StringFilter<"TechnicianReview"> | string
    rating?: IntFilter<"TechnicianReview"> | number
    date?: DateTimeFilter<"TechnicianReview"> | Date | string
    comment?: StringFilter<"TechnicianReview"> | string
    technician?: XOR<TechnicianRelationFilter, TechnicianWhereInput>
  }, "id">

  export type TechnicianReviewOrderByWithAggregationInput = {
    id?: SortOrder
    technicianId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    comment?: SortOrder
    _count?: TechnicianReviewCountOrderByAggregateInput
    _avg?: TechnicianReviewAvgOrderByAggregateInput
    _max?: TechnicianReviewMaxOrderByAggregateInput
    _min?: TechnicianReviewMinOrderByAggregateInput
    _sum?: TechnicianReviewSumOrderByAggregateInput
  }

  export type TechnicianReviewScalarWhereWithAggregatesInput = {
    AND?: TechnicianReviewScalarWhereWithAggregatesInput | TechnicianReviewScalarWhereWithAggregatesInput[]
    OR?: TechnicianReviewScalarWhereWithAggregatesInput[]
    NOT?: TechnicianReviewScalarWhereWithAggregatesInput | TechnicianReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TechnicianReview"> | string
    technicianId?: StringWithAggregatesFilter<"TechnicianReview"> | string
    reviewer?: StringWithAggregatesFilter<"TechnicianReview"> | string
    rating?: IntWithAggregatesFilter<"TechnicianReview"> | number
    date?: DateTimeWithAggregatesFilter<"TechnicianReview"> | Date | string
    comment?: StringWithAggregatesFilter<"TechnicianReview"> | string
  }

  export type TechnicianFieldReportWhereInput = {
    AND?: TechnicianFieldReportWhereInput | TechnicianFieldReportWhereInput[]
    OR?: TechnicianFieldReportWhereInput[]
    NOT?: TechnicianFieldReportWhereInput | TechnicianFieldReportWhereInput[]
    id?: StringFilter<"TechnicianFieldReport"> | string
    technicianId?: StringFilter<"TechnicianFieldReport"> | string
    ticketId?: StringFilter<"TechnicianFieldReport"> | string
    date?: DateTimeFilter<"TechnicianFieldReport"> | Date | string
    status?: StringFilter<"TechnicianFieldReport"> | string
    description?: StringFilter<"TechnicianFieldReport"> | string
    timeOnSite?: StringFilter<"TechnicianFieldReport"> | string
    parts?: StringNullableFilter<"TechnicianFieldReport"> | string | null
    technician?: XOR<TechnicianRelationFilter, TechnicianWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type TechnicianFieldReportOrderByWithRelationInput = {
    id?: SortOrder
    technicianId?: SortOrder
    ticketId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrder
    timeOnSite?: SortOrder
    parts?: SortOrder
    technician?: TechnicianOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type TechnicianFieldReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TechnicianFieldReportWhereInput | TechnicianFieldReportWhereInput[]
    OR?: TechnicianFieldReportWhereInput[]
    NOT?: TechnicianFieldReportWhereInput | TechnicianFieldReportWhereInput[]
    technicianId?: StringFilter<"TechnicianFieldReport"> | string
    ticketId?: StringFilter<"TechnicianFieldReport"> | string
    date?: DateTimeFilter<"TechnicianFieldReport"> | Date | string
    status?: StringFilter<"TechnicianFieldReport"> | string
    description?: StringFilter<"TechnicianFieldReport"> | string
    timeOnSite?: StringFilter<"TechnicianFieldReport"> | string
    parts?: StringNullableFilter<"TechnicianFieldReport"> | string | null
    technician?: XOR<TechnicianRelationFilter, TechnicianWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }, "id">

  export type TechnicianFieldReportOrderByWithAggregationInput = {
    id?: SortOrder
    technicianId?: SortOrder
    ticketId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrder
    timeOnSite?: SortOrder
    parts?: SortOrder
    _count?: TechnicianFieldReportCountOrderByAggregateInput
    _max?: TechnicianFieldReportMaxOrderByAggregateInput
    _min?: TechnicianFieldReportMinOrderByAggregateInput
  }

  export type TechnicianFieldReportScalarWhereWithAggregatesInput = {
    AND?: TechnicianFieldReportScalarWhereWithAggregatesInput | TechnicianFieldReportScalarWhereWithAggregatesInput[]
    OR?: TechnicianFieldReportScalarWhereWithAggregatesInput[]
    NOT?: TechnicianFieldReportScalarWhereWithAggregatesInput | TechnicianFieldReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TechnicianFieldReport"> | string
    technicianId?: StringWithAggregatesFilter<"TechnicianFieldReport"> | string
    ticketId?: StringWithAggregatesFilter<"TechnicianFieldReport"> | string
    date?: DateTimeWithAggregatesFilter<"TechnicianFieldReport"> | Date | string
    status?: StringWithAggregatesFilter<"TechnicianFieldReport"> | string
    description?: StringWithAggregatesFilter<"TechnicianFieldReport"> | string
    timeOnSite?: StringWithAggregatesFilter<"TechnicianFieldReport"> | string
    parts?: StringNullableWithAggregatesFilter<"TechnicianFieldReport"> | string | null
  }

  export type TechnicianMetricWhereInput = {
    AND?: TechnicianMetricWhereInput | TechnicianMetricWhereInput[]
    OR?: TechnicianMetricWhereInput[]
    NOT?: TechnicianMetricWhereInput | TechnicianMetricWhereInput[]
    id?: StringFilter<"TechnicianMetric"> | string
    technicianId?: StringFilter<"TechnicianMetric"> | string
    label?: StringFilter<"TechnicianMetric"> | string
    benchmark?: FloatFilter<"TechnicianMetric"> | number
    score?: FloatFilter<"TechnicianMetric"> | number
    technician?: XOR<TechnicianRelationFilter, TechnicianWhereInput>
  }

  export type TechnicianMetricOrderByWithRelationInput = {
    id?: SortOrder
    technicianId?: SortOrder
    label?: SortOrder
    benchmark?: SortOrder
    score?: SortOrder
    technician?: TechnicianOrderByWithRelationInput
  }

  export type TechnicianMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TechnicianMetricWhereInput | TechnicianMetricWhereInput[]
    OR?: TechnicianMetricWhereInput[]
    NOT?: TechnicianMetricWhereInput | TechnicianMetricWhereInput[]
    technicianId?: StringFilter<"TechnicianMetric"> | string
    label?: StringFilter<"TechnicianMetric"> | string
    benchmark?: FloatFilter<"TechnicianMetric"> | number
    score?: FloatFilter<"TechnicianMetric"> | number
    technician?: XOR<TechnicianRelationFilter, TechnicianWhereInput>
  }, "id">

  export type TechnicianMetricOrderByWithAggregationInput = {
    id?: SortOrder
    technicianId?: SortOrder
    label?: SortOrder
    benchmark?: SortOrder
    score?: SortOrder
    _count?: TechnicianMetricCountOrderByAggregateInput
    _avg?: TechnicianMetricAvgOrderByAggregateInput
    _max?: TechnicianMetricMaxOrderByAggregateInput
    _min?: TechnicianMetricMinOrderByAggregateInput
    _sum?: TechnicianMetricSumOrderByAggregateInput
  }

  export type TechnicianMetricScalarWhereWithAggregatesInput = {
    AND?: TechnicianMetricScalarWhereWithAggregatesInput | TechnicianMetricScalarWhereWithAggregatesInput[]
    OR?: TechnicianMetricScalarWhereWithAggregatesInput[]
    NOT?: TechnicianMetricScalarWhereWithAggregatesInput | TechnicianMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TechnicianMetric"> | string
    technicianId?: StringWithAggregatesFilter<"TechnicianMetric"> | string
    label?: StringWithAggregatesFilter<"TechnicianMetric"> | string
    benchmark?: FloatWithAggregatesFilter<"TechnicianMetric"> | number
    score?: FloatWithAggregatesFilter<"TechnicianMetric"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutUserInput
    technician?: TechnicianCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    technician?: TechnicianUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutUserNestedInput
    technician?: TechnicianUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    technician?: TechnicianUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
    name: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    plan?: PlanCreateNestedOneWithoutCustomersInput
    tickets?: TicketCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    planId?: string | null
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    plan?: PlanUpdateOneWithoutCustomersNestedInput
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    planId?: string | null
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    customers?: CustomerCreateNestedManyWithoutPlanInput
    invoices?: InvoiceCreateNestedManyWithoutPlanInput
    requests?: UpgradeRequestCreateNestedManyWithoutInitialPlanInput
    finalPlans?: UpgradeRequestCreateNestedManyWithoutFinalPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    customers?: CustomerUncheckedCreateNestedManyWithoutPlanInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPlanInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutInitialPlanInput
    finalPlans?: UpgradeRequestUncheckedCreateNestedManyWithoutFinalPlanInput
  }

  export type PlanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    customers?: CustomerUpdateManyWithoutPlanNestedInput
    invoices?: InvoiceUpdateManyWithoutPlanNestedInput
    requests?: UpgradeRequestUpdateManyWithoutInitialPlanNestedInput
    finalPlans?: UpgradeRequestUpdateManyWithoutFinalPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    customers?: CustomerUncheckedUpdateManyWithoutPlanNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPlanNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutInitialPlanNestedInput
    finalPlans?: UpgradeRequestUncheckedUpdateManyWithoutFinalPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
  }

  export type PlanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
  }

  export type PlanUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
  }

  export type TechnicianCreateInput = {
    id?: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTechnicianInput
    jobs?: JobCreateNestedManyWithoutTechnicianInput
    tickets?: TicketCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewUncheckedCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTechnicianNestedInput
    jobs?: JobUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUncheckedUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianCreateManyInput = {
    id?: string
    userId: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TechnicianUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicianUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTicketsInput
    assignedTo?: TechnicianCreateNestedOneWithoutTicketsInput
    job?: JobCreateNestedOneWithoutTicketInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    customerId: string
    assignedToId?: string | null
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job?: JobUncheckedCreateNestedOneWithoutTicketInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
    assignedTo?: TechnicianUpdateOneWithoutTicketsNestedInput
    job?: JobUpdateOneWithoutTicketNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUncheckedUpdateOneWithoutTicketNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    customerId: string
    assignedToId?: string | null
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft?: string | null
    issue: string
    accessNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutJobInput
    technician?: TechnicianCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    ticketId: string
    technicianId?: string | null
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft?: string | null
    issue: string
    accessNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateInput = {
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutJobNestedInput
    technician?: TechnicianUpdateOneWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateInput = {
    ticketId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyInput = {
    id?: string
    ticketId: string
    technicianId?: string | null
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft?: string | null
    issue: string
    accessNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    ticketId?: StringFieldUpdateOperationsInput | string
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoicesInput
    plan?: PlanCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    customerId: string
    planId?: string | null
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    plan?: PlanUpdateOneWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    customerId: string
    planId?: string | null
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    customerId: string
    invoiceId: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    customerId: string
    invoiceId: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpgradeRequestCreateInput = {
    id?: string
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
    customer: CustomerCreateNestedOneWithoutRequestsInput
    initialPlan?: PlanCreateNestedOneWithoutRequestsInput
    finalPlan?: PlanCreateNestedOneWithoutFinalPlansInput
  }

  export type UpgradeRequestUncheckedCreateInput = {
    id?: string
    customerId: string
    initialPlanId?: string | null
    finalPlanId?: string | null
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
  }

  export type UpgradeRequestUpdateInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
    customer?: CustomerUpdateOneRequiredWithoutRequestsNestedInput
    initialPlan?: PlanUpdateOneWithoutRequestsNestedInput
    finalPlan?: PlanUpdateOneWithoutFinalPlansNestedInput
  }

  export type UpgradeRequestUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    initialPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type UpgradeRequestCreateManyInput = {
    id?: string
    customerId: string
    initialPlanId?: string | null
    finalPlanId?: string | null
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
  }

  export type UpgradeRequestUpdateManyMutationInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type UpgradeRequestUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    initialPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type TechnicianReviewCreateInput = {
    id?: string
    reviewer: string
    rating: number
    date: Date | string
    comment: string
    technician: TechnicianCreateNestedOneWithoutReviewsInput
  }

  export type TechnicianReviewUncheckedCreateInput = {
    id?: string
    technicianId: string
    reviewer: string
    rating: number
    date: Date | string
    comment: string
  }

  export type TechnicianReviewUpdateInput = {
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
    technician?: TechnicianUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type TechnicianReviewUncheckedUpdateInput = {
    technicianId?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TechnicianReviewCreateManyInput = {
    id?: string
    technicianId: string
    reviewer: string
    rating: number
    date: Date | string
    comment: string
  }

  export type TechnicianReviewUpdateManyMutationInput = {
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TechnicianReviewUncheckedUpdateManyInput = {
    technicianId?: StringFieldUpdateOperationsInput | string
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TechnicianFieldReportCreateInput = {
    id?: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
    technician: TechnicianCreateNestedOneWithoutFieldReportsInput
    ticket: TicketCreateNestedOneWithoutFieldReportsInput
  }

  export type TechnicianFieldReportUncheckedCreateInput = {
    id?: string
    technicianId: string
    ticketId: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
  }

  export type TechnicianFieldReportUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
    technician?: TechnicianUpdateOneRequiredWithoutFieldReportsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutFieldReportsNestedInput
  }

  export type TechnicianFieldReportUncheckedUpdateInput = {
    technicianId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicianFieldReportCreateManyInput = {
    id?: string
    technicianId: string
    ticketId: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
  }

  export type TechnicianFieldReportUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicianFieldReportUncheckedUpdateManyInput = {
    technicianId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicianMetricCreateInput = {
    id?: string
    label: string
    benchmark: number
    score: number
    technician: TechnicianCreateNestedOneWithoutMetricsInput
  }

  export type TechnicianMetricUncheckedCreateInput = {
    id?: string
    technicianId: string
    label: string
    benchmark: number
    score: number
  }

  export type TechnicianMetricUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    benchmark?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    technician?: TechnicianUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type TechnicianMetricUncheckedUpdateInput = {
    technicianId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    benchmark?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type TechnicianMetricCreateManyInput = {
    id?: string
    technicianId: string
    label: string
    benchmark: number
    score: number
  }

  export type TechnicianMetricUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    benchmark?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type TechnicianMetricUncheckedUpdateManyInput = {
    technicianId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    benchmark?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type TechnicianNullableRelationFilter = {
    is?: TechnicianWhereInput | null
    isNot?: TechnicianWhereInput | null
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type PlanNullableRelationFilter = {
    is?: PlanWhereInput | null
    isNot?: PlanWhereInput | null
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type UpgradeRequestListRelationFilter = {
    every?: UpgradeRequestWhereInput
    some?: UpgradeRequestWhereInput
    none?: UpgradeRequestWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpgradeRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    planId?: SortOrder
    usage?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    area?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    planId?: SortOrder
    usage?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    area?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    planId?: SortOrder
    usage?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    area?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    speed?: SortOrder
    cost?: SortOrder
    status?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    speed?: SortOrder
    cost?: SortOrder
    status?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    speed?: SortOrder
    cost?: SortOrder
    status?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumTechnicianStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianStatus | EnumTechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianStatusFilter<$PrismaModel> | $Enums.TechnicianStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type TechnicianFieldReportListRelationFilter = {
    every?: TechnicianFieldReportWhereInput
    some?: TechnicianFieldReportWhereInput
    none?: TechnicianFieldReportWhereInput
  }

  export type TechnicianReviewListRelationFilter = {
    every?: TechnicianReviewWhereInput
    some?: TechnicianReviewWhereInput
    none?: TechnicianReviewWhereInput
  }

  export type TechnicianMetricListRelationFilter = {
    every?: TechnicianMetricWhereInput
    some?: TechnicianMetricWhereInput
    none?: TechnicianMetricWhereInput
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechnicianFieldReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechnicianReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechnicianMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechnicianCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    currentJobId?: SortOrder
    completedJobsCount?: SortOrder
    queueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicianAvgOrderByAggregateInput = {
    rating?: SortOrder
    completedJobsCount?: SortOrder
    queueCount?: SortOrder
  }

  export type TechnicianMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    currentJobId?: SortOrder
    completedJobsCount?: SortOrder
    queueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicianMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    currentJobId?: SortOrder
    completedJobsCount?: SortOrder
    queueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TechnicianSumOrderByAggregateInput = {
    rating?: SortOrder
    completedJobsCount?: SortOrder
    queueCount?: SortOrder
  }

  export type EnumTechnicianStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianStatus | EnumTechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianStatusWithAggregatesFilter<$PrismaModel> | $Enums.TechnicianStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicianStatusFilter<$PrismaModel>
    _max?: NestedEnumTechnicianStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type JobNullableRelationFilter = {
    is?: JobWhereInput | null
    isNot?: JobWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    assignedToId?: SortOrder
    ticketNumber?: SortOrder
    issue?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    sla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    assignedToId?: SortOrder
    ticketNumber?: SortOrder
    issue?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    sla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    assignedToId?: SortOrder
    ticketNumber?: SortOrder
    issue?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    sla?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumJobPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.JobPriority | EnumJobPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.JobPriority[] | ListEnumJobPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobPriority[] | ListEnumJobPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumJobPriorityFilter<$PrismaModel> | $Enums.JobPriority
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type TicketRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    technicianId?: SortOrder
    subscriber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    timeLeft?: SortOrder
    issue?: SortOrder
    accessNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    technicianId?: SortOrder
    subscriber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    timeLeft?: SortOrder
    issue?: SortOrder
    accessNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    technicianId?: SortOrder
    subscriber?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    timeLeft?: SortOrder
    issue?: SortOrder
    accessNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJobPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobPriority | EnumJobPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.JobPriority[] | ListEnumJobPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobPriority[] | ListEnumJobPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumJobPriorityWithAggregatesFilter<$PrismaModel> | $Enums.JobPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobPriorityFilter<$PrismaModel>
    _max?: NestedEnumJobPriorityFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    invoiceNumber?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    invoiceNumber?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    planId?: SortOrder
    invoiceNumber?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type InvoiceRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    period?: SortOrder
    amount?: SortOrder
    due?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    period?: SortOrder
    amount?: SortOrder
    due?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    period?: SortOrder
    amount?: SortOrder
    due?: SortOrder
    method?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumUpgradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UpgradeStatus | EnumUpgradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UpgradeStatus[] | ListEnumUpgradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UpgradeStatus[] | ListEnumUpgradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUpgradeStatusFilter<$PrismaModel> | $Enums.UpgradeStatus
  }

  export type UpgradeRequestCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    initialPlanId?: SortOrder
    finalPlanId?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
  }

  export type UpgradeRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    initialPlanId?: SortOrder
    finalPlanId?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
  }

  export type UpgradeRequestMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    initialPlanId?: SortOrder
    finalPlanId?: SortOrder
    requestedAt?: SortOrder
    status?: SortOrder
  }

  export type EnumUpgradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UpgradeStatus | EnumUpgradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UpgradeStatus[] | ListEnumUpgradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UpgradeStatus[] | ListEnumUpgradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUpgradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.UpgradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUpgradeStatusFilter<$PrismaModel>
    _max?: NestedEnumUpgradeStatusFilter<$PrismaModel>
  }

  export type TechnicianRelationFilter = {
    is?: TechnicianWhereInput
    isNot?: TechnicianWhereInput
  }

  export type TechnicianReviewCountOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    comment?: SortOrder
  }

  export type TechnicianReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type TechnicianReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    comment?: SortOrder
  }

  export type TechnicianReviewMinOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    reviewer?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    comment?: SortOrder
  }

  export type TechnicianReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type TechnicianFieldReportCountOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    ticketId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrder
    timeOnSite?: SortOrder
    parts?: SortOrder
  }

  export type TechnicianFieldReportMaxOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    ticketId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrder
    timeOnSite?: SortOrder
    parts?: SortOrder
  }

  export type TechnicianFieldReportMinOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    ticketId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    description?: SortOrder
    timeOnSite?: SortOrder
    parts?: SortOrder
  }

  export type TechnicianMetricCountOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    label?: SortOrder
    benchmark?: SortOrder
    score?: SortOrder
  }

  export type TechnicianMetricAvgOrderByAggregateInput = {
    benchmark?: SortOrder
    score?: SortOrder
  }

  export type TechnicianMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    label?: SortOrder
    benchmark?: SortOrder
    score?: SortOrder
  }

  export type TechnicianMetricMinOrderByAggregateInput = {
    id?: SortOrder
    technicianId?: SortOrder
    label?: SortOrder
    benchmark?: SortOrder
    score?: SortOrder
  }

  export type TechnicianMetricSumOrderByAggregateInput = {
    benchmark?: SortOrder
    score?: SortOrder
  }

  export type CustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type TechnicianCreateNestedOneWithoutUserInput = {
    create?: XOR<TechnicianCreateWithoutUserInput, TechnicianUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutUserInput
    connect?: TechnicianWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type TechnicianUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TechnicianCreateWithoutUserInput, TechnicianUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutUserInput
    connect?: TechnicianWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type TechnicianUpdateOneWithoutUserNestedInput = {
    create?: XOR<TechnicianCreateWithoutUserInput, TechnicianUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutUserInput
    upsert?: TechnicianUpsertWithoutUserInput
    disconnect?: TechnicianWhereInput | boolean
    delete?: TechnicianWhereInput | boolean
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutUserInput, TechnicianUpdateWithoutUserInput>, TechnicianUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type TechnicianUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TechnicianCreateWithoutUserInput, TechnicianUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutUserInput
    upsert?: TechnicianUpsertWithoutUserInput
    disconnect?: TechnicianWhereInput | boolean
    delete?: TechnicianWhereInput | boolean
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutUserInput, TechnicianUpdateWithoutUserInput>, TechnicianUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutCustomersInput = {
    create?: XOR<PlanCreateWithoutCustomersInput, PlanUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: PlanCreateOrConnectWithoutCustomersInput
    connect?: PlanWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UpgradeRequestCreateNestedManyWithoutCustomerInput = {
    create?: XOR<UpgradeRequestCreateWithoutCustomerInput, UpgradeRequestUncheckedCreateWithoutCustomerInput> | UpgradeRequestCreateWithoutCustomerInput[] | UpgradeRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutCustomerInput | UpgradeRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: UpgradeRequestCreateManyCustomerInputEnvelope
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UpgradeRequestUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<UpgradeRequestCreateWithoutCustomerInput, UpgradeRequestUncheckedCreateWithoutCustomerInput> | UpgradeRequestCreateWithoutCustomerInput[] | UpgradeRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutCustomerInput | UpgradeRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: UpgradeRequestCreateManyCustomerInputEnvelope
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
  }

  export type EnumCustomerTypeFieldUpdateOperationsInput = {
    set?: $Enums.CustomerType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerInput, UserUpdateWithoutCustomerInput>, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type PlanUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<PlanCreateWithoutCustomersInput, PlanUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: PlanCreateOrConnectWithoutCustomersInput
    upsert?: PlanUpsertWithoutCustomersInput
    disconnect?: boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutCustomersInput, PlanUpdateWithoutCustomersInput>, PlanUncheckedUpdateWithoutCustomersInput>
  }

  export type TicketUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UpgradeRequestUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<UpgradeRequestCreateWithoutCustomerInput, UpgradeRequestUncheckedCreateWithoutCustomerInput> | UpgradeRequestCreateWithoutCustomerInput[] | UpgradeRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutCustomerInput | UpgradeRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: UpgradeRequestUpsertWithWhereUniqueWithoutCustomerInput | UpgradeRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: UpgradeRequestCreateManyCustomerInputEnvelope
    set?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    disconnect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    delete?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    update?: UpgradeRequestUpdateWithWhereUniqueWithoutCustomerInput | UpgradeRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: UpgradeRequestUpdateManyWithWhereWithoutCustomerInput | UpgradeRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: UpgradeRequestScalarWhereInput | UpgradeRequestScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UpgradeRequestUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<UpgradeRequestCreateWithoutCustomerInput, UpgradeRequestUncheckedCreateWithoutCustomerInput> | UpgradeRequestCreateWithoutCustomerInput[] | UpgradeRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutCustomerInput | UpgradeRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: UpgradeRequestUpsertWithWhereUniqueWithoutCustomerInput | UpgradeRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: UpgradeRequestCreateManyCustomerInputEnvelope
    set?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    disconnect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    delete?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    update?: UpgradeRequestUpdateWithWhereUniqueWithoutCustomerInput | UpgradeRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: UpgradeRequestUpdateManyWithWhereWithoutCustomerInput | UpgradeRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: UpgradeRequestScalarWhereInput | UpgradeRequestScalarWhereInput[]
  }

  export type CustomerCreateNestedManyWithoutPlanInput = {
    create?: XOR<CustomerCreateWithoutPlanInput, CustomerUncheckedCreateWithoutPlanInput> | CustomerCreateWithoutPlanInput[] | CustomerUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutPlanInput | CustomerCreateOrConnectWithoutPlanInput[]
    createMany?: CustomerCreateManyPlanInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutPlanInput = {
    create?: XOR<InvoiceCreateWithoutPlanInput, InvoiceUncheckedCreateWithoutPlanInput> | InvoiceCreateWithoutPlanInput[] | InvoiceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPlanInput | InvoiceCreateOrConnectWithoutPlanInput[]
    createMany?: InvoiceCreateManyPlanInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type UpgradeRequestCreateNestedManyWithoutInitialPlanInput = {
    create?: XOR<UpgradeRequestCreateWithoutInitialPlanInput, UpgradeRequestUncheckedCreateWithoutInitialPlanInput> | UpgradeRequestCreateWithoutInitialPlanInput[] | UpgradeRequestUncheckedCreateWithoutInitialPlanInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutInitialPlanInput | UpgradeRequestCreateOrConnectWithoutInitialPlanInput[]
    createMany?: UpgradeRequestCreateManyInitialPlanInputEnvelope
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
  }

  export type UpgradeRequestCreateNestedManyWithoutFinalPlanInput = {
    create?: XOR<UpgradeRequestCreateWithoutFinalPlanInput, UpgradeRequestUncheckedCreateWithoutFinalPlanInput> | UpgradeRequestCreateWithoutFinalPlanInput[] | UpgradeRequestUncheckedCreateWithoutFinalPlanInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutFinalPlanInput | UpgradeRequestCreateOrConnectWithoutFinalPlanInput[]
    createMany?: UpgradeRequestCreateManyFinalPlanInputEnvelope
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<CustomerCreateWithoutPlanInput, CustomerUncheckedCreateWithoutPlanInput> | CustomerCreateWithoutPlanInput[] | CustomerUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutPlanInput | CustomerCreateOrConnectWithoutPlanInput[]
    createMany?: CustomerCreateManyPlanInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<InvoiceCreateWithoutPlanInput, InvoiceUncheckedCreateWithoutPlanInput> | InvoiceCreateWithoutPlanInput[] | InvoiceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPlanInput | InvoiceCreateOrConnectWithoutPlanInput[]
    createMany?: InvoiceCreateManyPlanInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type UpgradeRequestUncheckedCreateNestedManyWithoutInitialPlanInput = {
    create?: XOR<UpgradeRequestCreateWithoutInitialPlanInput, UpgradeRequestUncheckedCreateWithoutInitialPlanInput> | UpgradeRequestCreateWithoutInitialPlanInput[] | UpgradeRequestUncheckedCreateWithoutInitialPlanInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutInitialPlanInput | UpgradeRequestCreateOrConnectWithoutInitialPlanInput[]
    createMany?: UpgradeRequestCreateManyInitialPlanInputEnvelope
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
  }

  export type UpgradeRequestUncheckedCreateNestedManyWithoutFinalPlanInput = {
    create?: XOR<UpgradeRequestCreateWithoutFinalPlanInput, UpgradeRequestUncheckedCreateWithoutFinalPlanInput> | UpgradeRequestCreateWithoutFinalPlanInput[] | UpgradeRequestUncheckedCreateWithoutFinalPlanInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutFinalPlanInput | UpgradeRequestCreateOrConnectWithoutFinalPlanInput[]
    createMany?: UpgradeRequestCreateManyFinalPlanInputEnvelope
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type CustomerUpdateManyWithoutPlanNestedInput = {
    create?: XOR<CustomerCreateWithoutPlanInput, CustomerUncheckedCreateWithoutPlanInput> | CustomerCreateWithoutPlanInput[] | CustomerUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutPlanInput | CustomerCreateOrConnectWithoutPlanInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutPlanInput | CustomerUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: CustomerCreateManyPlanInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutPlanInput | CustomerUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutPlanInput | CustomerUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutPlanNestedInput = {
    create?: XOR<InvoiceCreateWithoutPlanInput, InvoiceUncheckedCreateWithoutPlanInput> | InvoiceCreateWithoutPlanInput[] | InvoiceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPlanInput | InvoiceCreateOrConnectWithoutPlanInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPlanInput | InvoiceUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: InvoiceCreateManyPlanInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPlanInput | InvoiceUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPlanInput | InvoiceUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type UpgradeRequestUpdateManyWithoutInitialPlanNestedInput = {
    create?: XOR<UpgradeRequestCreateWithoutInitialPlanInput, UpgradeRequestUncheckedCreateWithoutInitialPlanInput> | UpgradeRequestCreateWithoutInitialPlanInput[] | UpgradeRequestUncheckedCreateWithoutInitialPlanInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutInitialPlanInput | UpgradeRequestCreateOrConnectWithoutInitialPlanInput[]
    upsert?: UpgradeRequestUpsertWithWhereUniqueWithoutInitialPlanInput | UpgradeRequestUpsertWithWhereUniqueWithoutInitialPlanInput[]
    createMany?: UpgradeRequestCreateManyInitialPlanInputEnvelope
    set?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    disconnect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    delete?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    update?: UpgradeRequestUpdateWithWhereUniqueWithoutInitialPlanInput | UpgradeRequestUpdateWithWhereUniqueWithoutInitialPlanInput[]
    updateMany?: UpgradeRequestUpdateManyWithWhereWithoutInitialPlanInput | UpgradeRequestUpdateManyWithWhereWithoutInitialPlanInput[]
    deleteMany?: UpgradeRequestScalarWhereInput | UpgradeRequestScalarWhereInput[]
  }

  export type UpgradeRequestUpdateManyWithoutFinalPlanNestedInput = {
    create?: XOR<UpgradeRequestCreateWithoutFinalPlanInput, UpgradeRequestUncheckedCreateWithoutFinalPlanInput> | UpgradeRequestCreateWithoutFinalPlanInput[] | UpgradeRequestUncheckedCreateWithoutFinalPlanInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutFinalPlanInput | UpgradeRequestCreateOrConnectWithoutFinalPlanInput[]
    upsert?: UpgradeRequestUpsertWithWhereUniqueWithoutFinalPlanInput | UpgradeRequestUpsertWithWhereUniqueWithoutFinalPlanInput[]
    createMany?: UpgradeRequestCreateManyFinalPlanInputEnvelope
    set?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    disconnect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    delete?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    update?: UpgradeRequestUpdateWithWhereUniqueWithoutFinalPlanInput | UpgradeRequestUpdateWithWhereUniqueWithoutFinalPlanInput[]
    updateMany?: UpgradeRequestUpdateManyWithWhereWithoutFinalPlanInput | UpgradeRequestUpdateManyWithWhereWithoutFinalPlanInput[]
    deleteMany?: UpgradeRequestScalarWhereInput | UpgradeRequestScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<CustomerCreateWithoutPlanInput, CustomerUncheckedCreateWithoutPlanInput> | CustomerCreateWithoutPlanInput[] | CustomerUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutPlanInput | CustomerCreateOrConnectWithoutPlanInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutPlanInput | CustomerUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: CustomerCreateManyPlanInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutPlanInput | CustomerUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutPlanInput | CustomerUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<InvoiceCreateWithoutPlanInput, InvoiceUncheckedCreateWithoutPlanInput> | InvoiceCreateWithoutPlanInput[] | InvoiceUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPlanInput | InvoiceCreateOrConnectWithoutPlanInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPlanInput | InvoiceUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: InvoiceCreateManyPlanInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPlanInput | InvoiceUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPlanInput | InvoiceUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type UpgradeRequestUncheckedUpdateManyWithoutInitialPlanNestedInput = {
    create?: XOR<UpgradeRequestCreateWithoutInitialPlanInput, UpgradeRequestUncheckedCreateWithoutInitialPlanInput> | UpgradeRequestCreateWithoutInitialPlanInput[] | UpgradeRequestUncheckedCreateWithoutInitialPlanInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutInitialPlanInput | UpgradeRequestCreateOrConnectWithoutInitialPlanInput[]
    upsert?: UpgradeRequestUpsertWithWhereUniqueWithoutInitialPlanInput | UpgradeRequestUpsertWithWhereUniqueWithoutInitialPlanInput[]
    createMany?: UpgradeRequestCreateManyInitialPlanInputEnvelope
    set?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    disconnect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    delete?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    update?: UpgradeRequestUpdateWithWhereUniqueWithoutInitialPlanInput | UpgradeRequestUpdateWithWhereUniqueWithoutInitialPlanInput[]
    updateMany?: UpgradeRequestUpdateManyWithWhereWithoutInitialPlanInput | UpgradeRequestUpdateManyWithWhereWithoutInitialPlanInput[]
    deleteMany?: UpgradeRequestScalarWhereInput | UpgradeRequestScalarWhereInput[]
  }

  export type UpgradeRequestUncheckedUpdateManyWithoutFinalPlanNestedInput = {
    create?: XOR<UpgradeRequestCreateWithoutFinalPlanInput, UpgradeRequestUncheckedCreateWithoutFinalPlanInput> | UpgradeRequestCreateWithoutFinalPlanInput[] | UpgradeRequestUncheckedCreateWithoutFinalPlanInput[]
    connectOrCreate?: UpgradeRequestCreateOrConnectWithoutFinalPlanInput | UpgradeRequestCreateOrConnectWithoutFinalPlanInput[]
    upsert?: UpgradeRequestUpsertWithWhereUniqueWithoutFinalPlanInput | UpgradeRequestUpsertWithWhereUniqueWithoutFinalPlanInput[]
    createMany?: UpgradeRequestCreateManyFinalPlanInputEnvelope
    set?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    disconnect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    delete?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    connect?: UpgradeRequestWhereUniqueInput | UpgradeRequestWhereUniqueInput[]
    update?: UpgradeRequestUpdateWithWhereUniqueWithoutFinalPlanInput | UpgradeRequestUpdateWithWhereUniqueWithoutFinalPlanInput[]
    updateMany?: UpgradeRequestUpdateManyWithWhereWithoutFinalPlanInput | UpgradeRequestUpdateManyWithWhereWithoutFinalPlanInput[]
    deleteMany?: UpgradeRequestScalarWhereInput | UpgradeRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTechnicianInput = {
    create?: XOR<UserCreateWithoutTechnicianInput, UserUncheckedCreateWithoutTechnicianInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechnicianInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput> | JobCreateWithoutTechnicianInput[] | JobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: JobCreateOrConnectWithoutTechnicianInput | JobCreateOrConnectWithoutTechnicianInput[]
    createMany?: JobCreateManyTechnicianInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TechnicianFieldReportCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TechnicianFieldReportCreateWithoutTechnicianInput, TechnicianFieldReportUncheckedCreateWithoutTechnicianInput> | TechnicianFieldReportCreateWithoutTechnicianInput[] | TechnicianFieldReportUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianFieldReportCreateOrConnectWithoutTechnicianInput | TechnicianFieldReportCreateOrConnectWithoutTechnicianInput[]
    createMany?: TechnicianFieldReportCreateManyTechnicianInputEnvelope
    connect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
  }

  export type TechnicianReviewCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TechnicianReviewCreateWithoutTechnicianInput, TechnicianReviewUncheckedCreateWithoutTechnicianInput> | TechnicianReviewCreateWithoutTechnicianInput[] | TechnicianReviewUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianReviewCreateOrConnectWithoutTechnicianInput | TechnicianReviewCreateOrConnectWithoutTechnicianInput[]
    createMany?: TechnicianReviewCreateManyTechnicianInputEnvelope
    connect?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
  }

  export type TechnicianMetricCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TechnicianMetricCreateWithoutTechnicianInput, TechnicianMetricUncheckedCreateWithoutTechnicianInput> | TechnicianMetricCreateWithoutTechnicianInput[] | TechnicianMetricUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianMetricCreateOrConnectWithoutTechnicianInput | TechnicianMetricCreateOrConnectWithoutTechnicianInput[]
    createMany?: TechnicianMetricCreateManyTechnicianInputEnvelope
    connect?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput> | JobCreateWithoutTechnicianInput[] | JobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: JobCreateOrConnectWithoutTechnicianInput | JobCreateOrConnectWithoutTechnicianInput[]
    createMany?: JobCreateManyTechnicianInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TechnicianFieldReportUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TechnicianFieldReportCreateWithoutTechnicianInput, TechnicianFieldReportUncheckedCreateWithoutTechnicianInput> | TechnicianFieldReportCreateWithoutTechnicianInput[] | TechnicianFieldReportUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianFieldReportCreateOrConnectWithoutTechnicianInput | TechnicianFieldReportCreateOrConnectWithoutTechnicianInput[]
    createMany?: TechnicianFieldReportCreateManyTechnicianInputEnvelope
    connect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
  }

  export type TechnicianReviewUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TechnicianReviewCreateWithoutTechnicianInput, TechnicianReviewUncheckedCreateWithoutTechnicianInput> | TechnicianReviewCreateWithoutTechnicianInput[] | TechnicianReviewUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianReviewCreateOrConnectWithoutTechnicianInput | TechnicianReviewCreateOrConnectWithoutTechnicianInput[]
    createMany?: TechnicianReviewCreateManyTechnicianInputEnvelope
    connect?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
  }

  export type TechnicianMetricUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TechnicianMetricCreateWithoutTechnicianInput, TechnicianMetricUncheckedCreateWithoutTechnicianInput> | TechnicianMetricCreateWithoutTechnicianInput[] | TechnicianMetricUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianMetricCreateOrConnectWithoutTechnicianInput | TechnicianMetricCreateOrConnectWithoutTechnicianInput[]
    createMany?: TechnicianMetricCreateManyTechnicianInputEnvelope
    connect?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
  }

  export type EnumTechnicianStatusFieldUpdateOperationsInput = {
    set?: $Enums.TechnicianStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTechnicianNestedInput = {
    create?: XOR<UserCreateWithoutTechnicianInput, UserUncheckedCreateWithoutTechnicianInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechnicianInput
    upsert?: UserUpsertWithoutTechnicianInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTechnicianInput, UserUpdateWithoutTechnicianInput>, UserUncheckedUpdateWithoutTechnicianInput>
  }

  export type JobUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput> | JobCreateWithoutTechnicianInput[] | JobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: JobCreateOrConnectWithoutTechnicianInput | JobCreateOrConnectWithoutTechnicianInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutTechnicianInput | JobUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: JobCreateManyTechnicianInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutTechnicianInput | JobUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: JobUpdateManyWithWhereWithoutTechnicianInput | JobUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput | TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput | TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput | TicketUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TechnicianFieldReportUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TechnicianFieldReportCreateWithoutTechnicianInput, TechnicianFieldReportUncheckedCreateWithoutTechnicianInput> | TechnicianFieldReportCreateWithoutTechnicianInput[] | TechnicianFieldReportUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianFieldReportCreateOrConnectWithoutTechnicianInput | TechnicianFieldReportCreateOrConnectWithoutTechnicianInput[]
    upsert?: TechnicianFieldReportUpsertWithWhereUniqueWithoutTechnicianInput | TechnicianFieldReportUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TechnicianFieldReportCreateManyTechnicianInputEnvelope
    set?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    disconnect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    delete?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    connect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    update?: TechnicianFieldReportUpdateWithWhereUniqueWithoutTechnicianInput | TechnicianFieldReportUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TechnicianFieldReportUpdateManyWithWhereWithoutTechnicianInput | TechnicianFieldReportUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TechnicianFieldReportScalarWhereInput | TechnicianFieldReportScalarWhereInput[]
  }

  export type TechnicianReviewUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TechnicianReviewCreateWithoutTechnicianInput, TechnicianReviewUncheckedCreateWithoutTechnicianInput> | TechnicianReviewCreateWithoutTechnicianInput[] | TechnicianReviewUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianReviewCreateOrConnectWithoutTechnicianInput | TechnicianReviewCreateOrConnectWithoutTechnicianInput[]
    upsert?: TechnicianReviewUpsertWithWhereUniqueWithoutTechnicianInput | TechnicianReviewUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TechnicianReviewCreateManyTechnicianInputEnvelope
    set?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
    disconnect?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
    delete?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
    connect?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
    update?: TechnicianReviewUpdateWithWhereUniqueWithoutTechnicianInput | TechnicianReviewUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TechnicianReviewUpdateManyWithWhereWithoutTechnicianInput | TechnicianReviewUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TechnicianReviewScalarWhereInput | TechnicianReviewScalarWhereInput[]
  }

  export type TechnicianMetricUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TechnicianMetricCreateWithoutTechnicianInput, TechnicianMetricUncheckedCreateWithoutTechnicianInput> | TechnicianMetricCreateWithoutTechnicianInput[] | TechnicianMetricUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianMetricCreateOrConnectWithoutTechnicianInput | TechnicianMetricCreateOrConnectWithoutTechnicianInput[]
    upsert?: TechnicianMetricUpsertWithWhereUniqueWithoutTechnicianInput | TechnicianMetricUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TechnicianMetricCreateManyTechnicianInputEnvelope
    set?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
    disconnect?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
    delete?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
    connect?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
    update?: TechnicianMetricUpdateWithWhereUniqueWithoutTechnicianInput | TechnicianMetricUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TechnicianMetricUpdateManyWithWhereWithoutTechnicianInput | TechnicianMetricUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TechnicianMetricScalarWhereInput | TechnicianMetricScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput> | JobCreateWithoutTechnicianInput[] | JobUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: JobCreateOrConnectWithoutTechnicianInput | JobCreateOrConnectWithoutTechnicianInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutTechnicianInput | JobUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: JobCreateManyTechnicianInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutTechnicianInput | JobUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: JobUpdateManyWithWhereWithoutTechnicianInput | JobUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput | TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput | TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput | TicketUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TechnicianFieldReportCreateWithoutTechnicianInput, TechnicianFieldReportUncheckedCreateWithoutTechnicianInput> | TechnicianFieldReportCreateWithoutTechnicianInput[] | TechnicianFieldReportUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianFieldReportCreateOrConnectWithoutTechnicianInput | TechnicianFieldReportCreateOrConnectWithoutTechnicianInput[]
    upsert?: TechnicianFieldReportUpsertWithWhereUniqueWithoutTechnicianInput | TechnicianFieldReportUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TechnicianFieldReportCreateManyTechnicianInputEnvelope
    set?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    disconnect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    delete?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    connect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    update?: TechnicianFieldReportUpdateWithWhereUniqueWithoutTechnicianInput | TechnicianFieldReportUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TechnicianFieldReportUpdateManyWithWhereWithoutTechnicianInput | TechnicianFieldReportUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TechnicianFieldReportScalarWhereInput | TechnicianFieldReportScalarWhereInput[]
  }

  export type TechnicianReviewUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TechnicianReviewCreateWithoutTechnicianInput, TechnicianReviewUncheckedCreateWithoutTechnicianInput> | TechnicianReviewCreateWithoutTechnicianInput[] | TechnicianReviewUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianReviewCreateOrConnectWithoutTechnicianInput | TechnicianReviewCreateOrConnectWithoutTechnicianInput[]
    upsert?: TechnicianReviewUpsertWithWhereUniqueWithoutTechnicianInput | TechnicianReviewUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TechnicianReviewCreateManyTechnicianInputEnvelope
    set?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
    disconnect?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
    delete?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
    connect?: TechnicianReviewWhereUniqueInput | TechnicianReviewWhereUniqueInput[]
    update?: TechnicianReviewUpdateWithWhereUniqueWithoutTechnicianInput | TechnicianReviewUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TechnicianReviewUpdateManyWithWhereWithoutTechnicianInput | TechnicianReviewUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TechnicianReviewScalarWhereInput | TechnicianReviewScalarWhereInput[]
  }

  export type TechnicianMetricUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TechnicianMetricCreateWithoutTechnicianInput, TechnicianMetricUncheckedCreateWithoutTechnicianInput> | TechnicianMetricCreateWithoutTechnicianInput[] | TechnicianMetricUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TechnicianMetricCreateOrConnectWithoutTechnicianInput | TechnicianMetricCreateOrConnectWithoutTechnicianInput[]
    upsert?: TechnicianMetricUpsertWithWhereUniqueWithoutTechnicianInput | TechnicianMetricUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TechnicianMetricCreateManyTechnicianInputEnvelope
    set?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
    disconnect?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
    delete?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
    connect?: TechnicianMetricWhereUniqueInput | TechnicianMetricWhereUniqueInput[]
    update?: TechnicianMetricUpdateWithWhereUniqueWithoutTechnicianInput | TechnicianMetricUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TechnicianMetricUpdateManyWithWhereWithoutTechnicianInput | TechnicianMetricUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TechnicianMetricScalarWhereInput | TechnicianMetricScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    connect?: CustomerWhereUniqueInput
  }

  export type TechnicianCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TechnicianCreateWithoutTicketsInput, TechnicianUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutTicketsInput
    connect?: TechnicianWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutTicketInput = {
    create?: XOR<JobCreateWithoutTicketInput, JobUncheckedCreateWithoutTicketInput>
    connectOrCreate?: JobCreateOrConnectWithoutTicketInput
    connect?: JobWhereUniqueInput
  }

  export type TechnicianFieldReportCreateNestedManyWithoutTicketInput = {
    create?: XOR<TechnicianFieldReportCreateWithoutTicketInput, TechnicianFieldReportUncheckedCreateWithoutTicketInput> | TechnicianFieldReportCreateWithoutTicketInput[] | TechnicianFieldReportUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TechnicianFieldReportCreateOrConnectWithoutTicketInput | TechnicianFieldReportCreateOrConnectWithoutTicketInput[]
    createMany?: TechnicianFieldReportCreateManyTicketInputEnvelope
    connect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<JobCreateWithoutTicketInput, JobUncheckedCreateWithoutTicketInput>
    connectOrCreate?: JobCreateOrConnectWithoutTicketInput
    connect?: JobWhereUniqueInput
  }

  export type TechnicianFieldReportUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TechnicianFieldReportCreateWithoutTicketInput, TechnicianFieldReportUncheckedCreateWithoutTicketInput> | TechnicianFieldReportCreateWithoutTicketInput[] | TechnicianFieldReportUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TechnicianFieldReportCreateOrConnectWithoutTicketInput | TechnicianFieldReportCreateOrConnectWithoutTicketInput[]
    createMany?: TechnicianFieldReportCreateManyTicketInputEnvelope
    connect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type CustomerUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    upsert?: CustomerUpsertWithoutTicketsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTicketsInput, CustomerUpdateWithoutTicketsInput>, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type TechnicianUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<TechnicianCreateWithoutTicketsInput, TechnicianUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutTicketsInput
    upsert?: TechnicianUpsertWithoutTicketsInput
    disconnect?: boolean
    delete?: TechnicianWhereInput | boolean
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutTicketsInput, TechnicianUpdateWithoutTicketsInput>, TechnicianUncheckedUpdateWithoutTicketsInput>
  }

  export type JobUpdateOneWithoutTicketNestedInput = {
    create?: XOR<JobCreateWithoutTicketInput, JobUncheckedCreateWithoutTicketInput>
    connectOrCreate?: JobCreateOrConnectWithoutTicketInput
    upsert?: JobUpsertWithoutTicketInput
    disconnect?: JobWhereInput | boolean
    delete?: JobWhereInput | boolean
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutTicketInput, JobUpdateWithoutTicketInput>, JobUncheckedUpdateWithoutTicketInput>
  }

  export type TechnicianFieldReportUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TechnicianFieldReportCreateWithoutTicketInput, TechnicianFieldReportUncheckedCreateWithoutTicketInput> | TechnicianFieldReportCreateWithoutTicketInput[] | TechnicianFieldReportUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TechnicianFieldReportCreateOrConnectWithoutTicketInput | TechnicianFieldReportCreateOrConnectWithoutTicketInput[]
    upsert?: TechnicianFieldReportUpsertWithWhereUniqueWithoutTicketInput | TechnicianFieldReportUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TechnicianFieldReportCreateManyTicketInputEnvelope
    set?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    disconnect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    delete?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    connect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    update?: TechnicianFieldReportUpdateWithWhereUniqueWithoutTicketInput | TechnicianFieldReportUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TechnicianFieldReportUpdateManyWithWhereWithoutTicketInput | TechnicianFieldReportUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TechnicianFieldReportScalarWhereInput | TechnicianFieldReportScalarWhereInput[]
  }

  export type JobUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<JobCreateWithoutTicketInput, JobUncheckedCreateWithoutTicketInput>
    connectOrCreate?: JobCreateOrConnectWithoutTicketInput
    upsert?: JobUpsertWithoutTicketInput
    disconnect?: JobWhereInput | boolean
    delete?: JobWhereInput | boolean
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutTicketInput, JobUpdateWithoutTicketInput>, JobUncheckedUpdateWithoutTicketInput>
  }

  export type TechnicianFieldReportUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TechnicianFieldReportCreateWithoutTicketInput, TechnicianFieldReportUncheckedCreateWithoutTicketInput> | TechnicianFieldReportCreateWithoutTicketInput[] | TechnicianFieldReportUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TechnicianFieldReportCreateOrConnectWithoutTicketInput | TechnicianFieldReportCreateOrConnectWithoutTicketInput[]
    upsert?: TechnicianFieldReportUpsertWithWhereUniqueWithoutTicketInput | TechnicianFieldReportUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TechnicianFieldReportCreateManyTicketInputEnvelope
    set?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    disconnect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    delete?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    connect?: TechnicianFieldReportWhereUniqueInput | TechnicianFieldReportWhereUniqueInput[]
    update?: TechnicianFieldReportUpdateWithWhereUniqueWithoutTicketInput | TechnicianFieldReportUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TechnicianFieldReportUpdateManyWithWhereWithoutTicketInput | TechnicianFieldReportUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TechnicianFieldReportScalarWhereInput | TechnicianFieldReportScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutJobInput = {
    create?: XOR<TicketCreateWithoutJobInput, TicketUncheckedCreateWithoutJobInput>
    connectOrCreate?: TicketCreateOrConnectWithoutJobInput
    connect?: TicketWhereUniqueInput
  }

  export type TechnicianCreateNestedOneWithoutJobsInput = {
    create?: XOR<TechnicianCreateWithoutJobsInput, TechnicianUncheckedCreateWithoutJobsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutJobsInput
    connect?: TechnicianWhereUniqueInput
  }

  export type EnumJobPriorityFieldUpdateOperationsInput = {
    set?: $Enums.JobPriority
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type TicketUpdateOneRequiredWithoutJobNestedInput = {
    create?: XOR<TicketCreateWithoutJobInput, TicketUncheckedCreateWithoutJobInput>
    connectOrCreate?: TicketCreateOrConnectWithoutJobInput
    upsert?: TicketUpsertWithoutJobInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutJobInput, TicketUpdateWithoutJobInput>, TicketUncheckedUpdateWithoutJobInput>
  }

  export type TechnicianUpdateOneWithoutJobsNestedInput = {
    create?: XOR<TechnicianCreateWithoutJobsInput, TechnicianUncheckedCreateWithoutJobsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutJobsInput
    upsert?: TechnicianUpsertWithoutJobsInput
    disconnect?: boolean
    delete?: TechnicianWhereInput | boolean
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutJobsInput, TechnicianUpdateWithoutJobsInput>, TechnicianUncheckedUpdateWithoutJobsInput>
  }

  export type CustomerCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<PlanCreateWithoutInvoicesInput, PlanUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutInvoicesInput
    connect?: PlanWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type CustomerUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    upsert?: CustomerUpsertWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutInvoicesInput, CustomerUpdateWithoutInvoicesInput>, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type PlanUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<PlanCreateWithoutInvoicesInput, PlanUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutInvoicesInput
    upsert?: PlanUpsertWithoutInvoicesInput
    disconnect?: boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutInvoicesInput, PlanUpdateWithoutInvoicesInput>, PlanUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type CustomerUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    upsert?: CustomerUpsertWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPaymentsInput, CustomerUpdateWithoutPaymentsInput>, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    upsert?: InvoiceUpsertWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerCreateNestedOneWithoutRequestsInput = {
    create?: XOR<CustomerCreateWithoutRequestsInput, CustomerUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRequestsInput
    connect?: CustomerWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutRequestsInput = {
    create?: XOR<PlanCreateWithoutRequestsInput, PlanUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutRequestsInput
    connect?: PlanWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutFinalPlansInput = {
    create?: XOR<PlanCreateWithoutFinalPlansInput, PlanUncheckedCreateWithoutFinalPlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutFinalPlansInput
    connect?: PlanWhereUniqueInput
  }

  export type EnumUpgradeStatusFieldUpdateOperationsInput = {
    set?: $Enums.UpgradeStatus
  }

  export type CustomerUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<CustomerCreateWithoutRequestsInput, CustomerUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRequestsInput
    upsert?: CustomerUpsertWithoutRequestsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRequestsInput, CustomerUpdateWithoutRequestsInput>, CustomerUncheckedUpdateWithoutRequestsInput>
  }

  export type PlanUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<PlanCreateWithoutRequestsInput, PlanUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutRequestsInput
    upsert?: PlanUpsertWithoutRequestsInput
    disconnect?: boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutRequestsInput, PlanUpdateWithoutRequestsInput>, PlanUncheckedUpdateWithoutRequestsInput>
  }

  export type PlanUpdateOneWithoutFinalPlansNestedInput = {
    create?: XOR<PlanCreateWithoutFinalPlansInput, PlanUncheckedCreateWithoutFinalPlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutFinalPlansInput
    upsert?: PlanUpsertWithoutFinalPlansInput
    disconnect?: boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutFinalPlansInput, PlanUpdateWithoutFinalPlansInput>, PlanUncheckedUpdateWithoutFinalPlansInput>
  }

  export type TechnicianCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TechnicianCreateWithoutReviewsInput, TechnicianUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutReviewsInput
    connect?: TechnicianWhereUniqueInput
  }

  export type TechnicianUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TechnicianCreateWithoutReviewsInput, TechnicianUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutReviewsInput
    upsert?: TechnicianUpsertWithoutReviewsInput
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutReviewsInput, TechnicianUpdateWithoutReviewsInput>, TechnicianUncheckedUpdateWithoutReviewsInput>
  }

  export type TechnicianCreateNestedOneWithoutFieldReportsInput = {
    create?: XOR<TechnicianCreateWithoutFieldReportsInput, TechnicianUncheckedCreateWithoutFieldReportsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutFieldReportsInput
    connect?: TechnicianWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutFieldReportsInput = {
    create?: XOR<TicketCreateWithoutFieldReportsInput, TicketUncheckedCreateWithoutFieldReportsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutFieldReportsInput
    connect?: TicketWhereUniqueInput
  }

  export type TechnicianUpdateOneRequiredWithoutFieldReportsNestedInput = {
    create?: XOR<TechnicianCreateWithoutFieldReportsInput, TechnicianUncheckedCreateWithoutFieldReportsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutFieldReportsInput
    upsert?: TechnicianUpsertWithoutFieldReportsInput
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutFieldReportsInput, TechnicianUpdateWithoutFieldReportsInput>, TechnicianUncheckedUpdateWithoutFieldReportsInput>
  }

  export type TicketUpdateOneRequiredWithoutFieldReportsNestedInput = {
    create?: XOR<TicketCreateWithoutFieldReportsInput, TicketUncheckedCreateWithoutFieldReportsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutFieldReportsInput
    upsert?: TicketUpsertWithoutFieldReportsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutFieldReportsInput, TicketUpdateWithoutFieldReportsInput>, TicketUncheckedUpdateWithoutFieldReportsInput>
  }

  export type TechnicianCreateNestedOneWithoutMetricsInput = {
    create?: XOR<TechnicianCreateWithoutMetricsInput, TechnicianUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutMetricsInput
    connect?: TechnicianWhereUniqueInput
  }

  export type TechnicianUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<TechnicianCreateWithoutMetricsInput, TechnicianUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: TechnicianCreateOrConnectWithoutMetricsInput
    upsert?: TechnicianUpsertWithoutMetricsInput
    connect?: TechnicianWhereUniqueInput
    update?: XOR<XOR<TechnicianUpdateToOneWithWhereWithoutMetricsInput, TechnicianUpdateWithoutMetricsInput>, TechnicianUncheckedUpdateWithoutMetricsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumTechnicianStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianStatus | EnumTechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianStatusFilter<$PrismaModel> | $Enums.TechnicianStatus
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTechnicianStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicianStatus | EnumTechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicianStatus[] | ListEnumTechnicianStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicianStatusWithAggregatesFilter<$PrismaModel> | $Enums.TechnicianStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicianStatusFilter<$PrismaModel>
    _max?: NestedEnumTechnicianStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumJobPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.JobPriority | EnumJobPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.JobPriority[] | ListEnumJobPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobPriority[] | ListEnumJobPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumJobPriorityFilter<$PrismaModel> | $Enums.JobPriority
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobPriority | EnumJobPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.JobPriority[] | ListEnumJobPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobPriority[] | ListEnumJobPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumJobPriorityWithAggregatesFilter<$PrismaModel> | $Enums.JobPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobPriorityFilter<$PrismaModel>
    _max?: NestedEnumJobPriorityFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumUpgradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UpgradeStatus | EnumUpgradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UpgradeStatus[] | ListEnumUpgradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UpgradeStatus[] | ListEnumUpgradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUpgradeStatusFilter<$PrismaModel> | $Enums.UpgradeStatus
  }

  export type NestedEnumUpgradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UpgradeStatus | EnumUpgradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UpgradeStatus[] | ListEnumUpgradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UpgradeStatus[] | ListEnumUpgradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUpgradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.UpgradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUpgradeStatusFilter<$PrismaModel>
    _max?: NestedEnumUpgradeStatusFilter<$PrismaModel>
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: PlanCreateNestedOneWithoutCustomersInput
    tickets?: TicketCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    planId?: string | null
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type TechnicianCreateWithoutUserInput = {
    id?: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobCreateNestedManyWithoutTechnicianInput
    tickets?: TicketCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewUncheckedCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianCreateOrConnectWithoutUserInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutUserInput, TechnicianUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpsertWithoutUserInput = {
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutCustomersNestedInput
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TechnicianUpsertWithoutUserInput = {
    update: XOR<TechnicianUpdateWithoutUserInput, TechnicianUncheckedUpdateWithoutUserInput>
    create: XOR<TechnicianCreateWithoutUserInput, TechnicianUncheckedCreateWithoutUserInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutUserInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutUserInput, TechnicianUncheckedUpdateWithoutUserInput>
  }

  export type TechnicianUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUncheckedUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutUserInput
    technician?: TechnicianCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    technician?: TechnicianUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutUserNestedInput
    technician?: TechnicianUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    technician?: TechnicianUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCustomerInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: TechnicianCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: TechnicianUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type PlanCreateWithoutCustomersInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    invoices?: InvoiceCreateNestedManyWithoutPlanInput
    requests?: UpgradeRequestCreateNestedManyWithoutInitialPlanInput
    finalPlans?: UpgradeRequestCreateNestedManyWithoutFinalPlanInput
  }

  export type PlanUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPlanInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutInitialPlanInput
    finalPlans?: UpgradeRequestUncheckedCreateNestedManyWithoutFinalPlanInput
  }

  export type PlanCreateOrConnectWithoutCustomersInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutCustomersInput, PlanUncheckedCreateWithoutCustomersInput>
  }

  export type TicketCreateWithoutCustomerInput = {
    id?: string
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: TechnicianCreateNestedOneWithoutTicketsInput
    job?: JobCreateNestedOneWithoutTicketInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCustomerInput = {
    id?: string
    assignedToId?: string | null
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job?: JobUncheckedCreateNestedOneWithoutTicketInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketCreateManyCustomerInputEnvelope = {
    data: TicketCreateManyCustomerInput | TicketCreateManyCustomerInput[]
  }

  export type InvoiceCreateWithoutCustomerInput = {
    id?: string
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
    plan?: PlanCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: string
    planId?: string | null
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: InvoiceCreateManyCustomerInput | InvoiceCreateManyCustomerInput[]
  }

  export type PaymentCreateWithoutCustomerInput = {
    id?: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutCustomerInput = {
    id?: string
    invoiceId: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentCreateManyCustomerInputEnvelope = {
    data: PaymentCreateManyCustomerInput | PaymentCreateManyCustomerInput[]
  }

  export type UpgradeRequestCreateWithoutCustomerInput = {
    id?: string
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
    initialPlan?: PlanCreateNestedOneWithoutRequestsInput
    finalPlan?: PlanCreateNestedOneWithoutFinalPlansInput
  }

  export type UpgradeRequestUncheckedCreateWithoutCustomerInput = {
    id?: string
    initialPlanId?: string | null
    finalPlanId?: string | null
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
  }

  export type UpgradeRequestCreateOrConnectWithoutCustomerInput = {
    where: UpgradeRequestWhereUniqueInput
    create: XOR<UpgradeRequestCreateWithoutCustomerInput, UpgradeRequestUncheckedCreateWithoutCustomerInput>
  }

  export type UpgradeRequestCreateManyCustomerInputEnvelope = {
    data: UpgradeRequestCreateManyCustomerInput | UpgradeRequestCreateManyCustomerInput[]
  }

  export type UserUpsertWithoutCustomerInput = {
    update: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type UserUpdateWithoutCustomerInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: TechnicianUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: TechnicianUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PlanUpsertWithoutCustomersInput = {
    update: XOR<PlanUpdateWithoutCustomersInput, PlanUncheckedUpdateWithoutCustomersInput>
    create: XOR<PlanCreateWithoutCustomersInput, PlanUncheckedCreateWithoutCustomersInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutCustomersInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutCustomersInput, PlanUncheckedUpdateWithoutCustomersInput>
  }

  export type PlanUpdateWithoutCustomersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    invoices?: InvoiceUpdateManyWithoutPlanNestedInput
    requests?: UpgradeRequestUpdateManyWithoutInitialPlanNestedInput
    finalPlans?: UpgradeRequestUpdateManyWithoutFinalPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutCustomersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    invoices?: InvoiceUncheckedUpdateManyWithoutPlanNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutInitialPlanNestedInput
    finalPlans?: UpgradeRequestUncheckedUpdateManyWithoutFinalPlanNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
  }

  export type TicketUpdateManyWithWhereWithoutCustomerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    customerId?: StringFilter<"Ticket"> | string
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    ticketNumber?: StringFilter<"Ticket"> | string
    issue?: StringFilter<"Ticket"> | string
    category?: StringFilter<"Ticket"> | string
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    sla?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    planId?: StringNullableFilter<"Invoice"> | string | null
    invoiceNumber?: StringFilter<"Invoice"> | string
    email?: StringFilter<"Invoice"> | string
    contact?: StringFilter<"Invoice"> | string
    amount?: IntFilter<"Invoice"> | number
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    paymentMethod?: StringNullableFilter<"Invoice"> | string | null
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    customerId?: StringFilter<"Payment"> | string
    invoiceId?: StringFilter<"Payment"> | string
    period?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    due?: DateTimeNullableFilter<"Payment"> | Date | string | null
    method?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UpgradeRequestUpsertWithWhereUniqueWithoutCustomerInput = {
    where: UpgradeRequestWhereUniqueInput
    update: XOR<UpgradeRequestUpdateWithoutCustomerInput, UpgradeRequestUncheckedUpdateWithoutCustomerInput>
    create: XOR<UpgradeRequestCreateWithoutCustomerInput, UpgradeRequestUncheckedCreateWithoutCustomerInput>
  }

  export type UpgradeRequestUpdateWithWhereUniqueWithoutCustomerInput = {
    where: UpgradeRequestWhereUniqueInput
    data: XOR<UpgradeRequestUpdateWithoutCustomerInput, UpgradeRequestUncheckedUpdateWithoutCustomerInput>
  }

  export type UpgradeRequestUpdateManyWithWhereWithoutCustomerInput = {
    where: UpgradeRequestScalarWhereInput
    data: XOR<UpgradeRequestUpdateManyMutationInput, UpgradeRequestUncheckedUpdateManyWithoutCustomerInput>
  }

  export type UpgradeRequestScalarWhereInput = {
    AND?: UpgradeRequestScalarWhereInput | UpgradeRequestScalarWhereInput[]
    OR?: UpgradeRequestScalarWhereInput[]
    NOT?: UpgradeRequestScalarWhereInput | UpgradeRequestScalarWhereInput[]
    id?: StringFilter<"UpgradeRequest"> | string
    customerId?: StringFilter<"UpgradeRequest"> | string
    initialPlanId?: StringNullableFilter<"UpgradeRequest"> | string | null
    finalPlanId?: StringNullableFilter<"UpgradeRequest"> | string | null
    requestedAt?: DateTimeFilter<"UpgradeRequest"> | Date | string
    status?: EnumUpgradeStatusFilter<"UpgradeRequest"> | $Enums.UpgradeStatus
  }

  export type CustomerCreateWithoutPlanInput = {
    id?: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    tickets?: TicketCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPlanInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPlanInput, CustomerUncheckedCreateWithoutPlanInput>
  }

  export type CustomerCreateManyPlanInputEnvelope = {
    data: CustomerCreateManyPlanInput | CustomerCreateManyPlanInput[]
  }

  export type InvoiceCreateWithoutPlanInput = {
    id?: string
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoicesInput
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutPlanInput = {
    id?: string
    customerId: string
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutPlanInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPlanInput, InvoiceUncheckedCreateWithoutPlanInput>
  }

  export type InvoiceCreateManyPlanInputEnvelope = {
    data: InvoiceCreateManyPlanInput | InvoiceCreateManyPlanInput[]
  }

  export type UpgradeRequestCreateWithoutInitialPlanInput = {
    id?: string
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
    customer: CustomerCreateNestedOneWithoutRequestsInput
    finalPlan?: PlanCreateNestedOneWithoutFinalPlansInput
  }

  export type UpgradeRequestUncheckedCreateWithoutInitialPlanInput = {
    id?: string
    customerId: string
    finalPlanId?: string | null
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
  }

  export type UpgradeRequestCreateOrConnectWithoutInitialPlanInput = {
    where: UpgradeRequestWhereUniqueInput
    create: XOR<UpgradeRequestCreateWithoutInitialPlanInput, UpgradeRequestUncheckedCreateWithoutInitialPlanInput>
  }

  export type UpgradeRequestCreateManyInitialPlanInputEnvelope = {
    data: UpgradeRequestCreateManyInitialPlanInput | UpgradeRequestCreateManyInitialPlanInput[]
  }

  export type UpgradeRequestCreateWithoutFinalPlanInput = {
    id?: string
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
    customer: CustomerCreateNestedOneWithoutRequestsInput
    initialPlan?: PlanCreateNestedOneWithoutRequestsInput
  }

  export type UpgradeRequestUncheckedCreateWithoutFinalPlanInput = {
    id?: string
    customerId: string
    initialPlanId?: string | null
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
  }

  export type UpgradeRequestCreateOrConnectWithoutFinalPlanInput = {
    where: UpgradeRequestWhereUniqueInput
    create: XOR<UpgradeRequestCreateWithoutFinalPlanInput, UpgradeRequestUncheckedCreateWithoutFinalPlanInput>
  }

  export type UpgradeRequestCreateManyFinalPlanInputEnvelope = {
    data: UpgradeRequestCreateManyFinalPlanInput | UpgradeRequestCreateManyFinalPlanInput[]
  }

  export type CustomerUpsertWithWhereUniqueWithoutPlanInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutPlanInput, CustomerUncheckedUpdateWithoutPlanInput>
    create: XOR<CustomerCreateWithoutPlanInput, CustomerUncheckedCreateWithoutPlanInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutPlanInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutPlanInput, CustomerUncheckedUpdateWithoutPlanInput>
  }

  export type CustomerUpdateManyWithWhereWithoutPlanInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutPlanInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    accountId?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    type?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    planId?: StringNullableFilter<"Customer"> | string | null
    usage?: StringNullableFilter<"Customer"> | string | null
    balance?: StringNullableFilter<"Customer"> | string | null
    status?: EnumPlanStatusFilter<"Customer"> | $Enums.PlanStatus
    area?: StringNullableFilter<"Customer"> | string | null
    since?: DateTimeFilter<"Customer"> | Date | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutPlanInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutPlanInput, InvoiceUncheckedUpdateWithoutPlanInput>
    create: XOR<InvoiceCreateWithoutPlanInput, InvoiceUncheckedCreateWithoutPlanInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutPlanInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutPlanInput, InvoiceUncheckedUpdateWithoutPlanInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutPlanInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutPlanInput>
  }

  export type UpgradeRequestUpsertWithWhereUniqueWithoutInitialPlanInput = {
    where: UpgradeRequestWhereUniqueInput
    update: XOR<UpgradeRequestUpdateWithoutInitialPlanInput, UpgradeRequestUncheckedUpdateWithoutInitialPlanInput>
    create: XOR<UpgradeRequestCreateWithoutInitialPlanInput, UpgradeRequestUncheckedCreateWithoutInitialPlanInput>
  }

  export type UpgradeRequestUpdateWithWhereUniqueWithoutInitialPlanInput = {
    where: UpgradeRequestWhereUniqueInput
    data: XOR<UpgradeRequestUpdateWithoutInitialPlanInput, UpgradeRequestUncheckedUpdateWithoutInitialPlanInput>
  }

  export type UpgradeRequestUpdateManyWithWhereWithoutInitialPlanInput = {
    where: UpgradeRequestScalarWhereInput
    data: XOR<UpgradeRequestUpdateManyMutationInput, UpgradeRequestUncheckedUpdateManyWithoutInitialPlanInput>
  }

  export type UpgradeRequestUpsertWithWhereUniqueWithoutFinalPlanInput = {
    where: UpgradeRequestWhereUniqueInput
    update: XOR<UpgradeRequestUpdateWithoutFinalPlanInput, UpgradeRequestUncheckedUpdateWithoutFinalPlanInput>
    create: XOR<UpgradeRequestCreateWithoutFinalPlanInput, UpgradeRequestUncheckedCreateWithoutFinalPlanInput>
  }

  export type UpgradeRequestUpdateWithWhereUniqueWithoutFinalPlanInput = {
    where: UpgradeRequestWhereUniqueInput
    data: XOR<UpgradeRequestUpdateWithoutFinalPlanInput, UpgradeRequestUncheckedUpdateWithoutFinalPlanInput>
  }

  export type UpgradeRequestUpdateManyWithWhereWithoutFinalPlanInput = {
    where: UpgradeRequestScalarWhereInput
    data: XOR<UpgradeRequestUpdateManyMutationInput, UpgradeRequestUncheckedUpdateManyWithoutFinalPlanInput>
  }

  export type UserCreateWithoutTechnicianInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTechnicianInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTechnicianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTechnicianInput, UserUncheckedCreateWithoutTechnicianInput>
  }

  export type JobCreateWithoutTechnicianInput = {
    id?: string
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft?: string | null
    issue: string
    accessNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutTechnicianInput = {
    id?: string
    ticketId: string
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft?: string | null
    issue: string
    accessNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutTechnicianInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput>
  }

  export type JobCreateManyTechnicianInputEnvelope = {
    data: JobCreateManyTechnicianInput | JobCreateManyTechnicianInput[]
  }

  export type TicketCreateWithoutAssignedToInput = {
    id?: string
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTicketsInput
    job?: JobCreateNestedOneWithoutTicketInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAssignedToInput = {
    id?: string
    customerId: string
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job?: JobUncheckedCreateNestedOneWithoutTicketInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput>
  }

  export type TicketCreateManyAssignedToInputEnvelope = {
    data: TicketCreateManyAssignedToInput | TicketCreateManyAssignedToInput[]
  }

  export type TechnicianFieldReportCreateWithoutTechnicianInput = {
    id?: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
    ticket: TicketCreateNestedOneWithoutFieldReportsInput
  }

  export type TechnicianFieldReportUncheckedCreateWithoutTechnicianInput = {
    id?: string
    ticketId: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
  }

  export type TechnicianFieldReportCreateOrConnectWithoutTechnicianInput = {
    where: TechnicianFieldReportWhereUniqueInput
    create: XOR<TechnicianFieldReportCreateWithoutTechnicianInput, TechnicianFieldReportUncheckedCreateWithoutTechnicianInput>
  }

  export type TechnicianFieldReportCreateManyTechnicianInputEnvelope = {
    data: TechnicianFieldReportCreateManyTechnicianInput | TechnicianFieldReportCreateManyTechnicianInput[]
  }

  export type TechnicianReviewCreateWithoutTechnicianInput = {
    id?: string
    reviewer: string
    rating: number
    date: Date | string
    comment: string
  }

  export type TechnicianReviewUncheckedCreateWithoutTechnicianInput = {
    id?: string
    reviewer: string
    rating: number
    date: Date | string
    comment: string
  }

  export type TechnicianReviewCreateOrConnectWithoutTechnicianInput = {
    where: TechnicianReviewWhereUniqueInput
    create: XOR<TechnicianReviewCreateWithoutTechnicianInput, TechnicianReviewUncheckedCreateWithoutTechnicianInput>
  }

  export type TechnicianReviewCreateManyTechnicianInputEnvelope = {
    data: TechnicianReviewCreateManyTechnicianInput | TechnicianReviewCreateManyTechnicianInput[]
  }

  export type TechnicianMetricCreateWithoutTechnicianInput = {
    id?: string
    label: string
    benchmark: number
    score: number
  }

  export type TechnicianMetricUncheckedCreateWithoutTechnicianInput = {
    id?: string
    label: string
    benchmark: number
    score: number
  }

  export type TechnicianMetricCreateOrConnectWithoutTechnicianInput = {
    where: TechnicianMetricWhereUniqueInput
    create: XOR<TechnicianMetricCreateWithoutTechnicianInput, TechnicianMetricUncheckedCreateWithoutTechnicianInput>
  }

  export type TechnicianMetricCreateManyTechnicianInputEnvelope = {
    data: TechnicianMetricCreateManyTechnicianInput | TechnicianMetricCreateManyTechnicianInput[]
  }

  export type UserUpsertWithoutTechnicianInput = {
    update: XOR<UserUpdateWithoutTechnicianInput, UserUncheckedUpdateWithoutTechnicianInput>
    create: XOR<UserCreateWithoutTechnicianInput, UserUncheckedCreateWithoutTechnicianInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTechnicianInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTechnicianInput, UserUncheckedUpdateWithoutTechnicianInput>
  }

  export type UserUpdateWithoutTechnicianInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTechnicianInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type JobUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutTechnicianInput, JobUncheckedUpdateWithoutTechnicianInput>
    create: XOR<JobCreateWithoutTechnicianInput, JobUncheckedCreateWithoutTechnicianInput>
  }

  export type JobUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutTechnicianInput, JobUncheckedUpdateWithoutTechnicianInput>
  }

  export type JobUpdateManyWithWhereWithoutTechnicianInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    ticketId?: StringFilter<"Job"> | string
    technicianId?: StringNullableFilter<"Job"> | string | null
    subscriber?: StringFilter<"Job"> | string
    address?: StringFilter<"Job"> | string
    phone?: StringFilter<"Job"> | string
    priority?: EnumJobPriorityFilter<"Job"> | $Enums.JobPriority
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    timeLeft?: StringNullableFilter<"Job"> | string | null
    issue?: StringFilter<"Job"> | string
    accessNote?: StringNullableFilter<"Job"> | string | null
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutAssignedToInput, TicketUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutAssignedToInput, TicketUncheckedUpdateWithoutAssignedToInput>
  }

  export type TicketUpdateManyWithWhereWithoutAssignedToInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TechnicianFieldReportUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: TechnicianFieldReportWhereUniqueInput
    update: XOR<TechnicianFieldReportUpdateWithoutTechnicianInput, TechnicianFieldReportUncheckedUpdateWithoutTechnicianInput>
    create: XOR<TechnicianFieldReportCreateWithoutTechnicianInput, TechnicianFieldReportUncheckedCreateWithoutTechnicianInput>
  }

  export type TechnicianFieldReportUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: TechnicianFieldReportWhereUniqueInput
    data: XOR<TechnicianFieldReportUpdateWithoutTechnicianInput, TechnicianFieldReportUncheckedUpdateWithoutTechnicianInput>
  }

  export type TechnicianFieldReportUpdateManyWithWhereWithoutTechnicianInput = {
    where: TechnicianFieldReportScalarWhereInput
    data: XOR<TechnicianFieldReportUpdateManyMutationInput, TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type TechnicianFieldReportScalarWhereInput = {
    AND?: TechnicianFieldReportScalarWhereInput | TechnicianFieldReportScalarWhereInput[]
    OR?: TechnicianFieldReportScalarWhereInput[]
    NOT?: TechnicianFieldReportScalarWhereInput | TechnicianFieldReportScalarWhereInput[]
    id?: StringFilter<"TechnicianFieldReport"> | string
    technicianId?: StringFilter<"TechnicianFieldReport"> | string
    ticketId?: StringFilter<"TechnicianFieldReport"> | string
    date?: DateTimeFilter<"TechnicianFieldReport"> | Date | string
    status?: StringFilter<"TechnicianFieldReport"> | string
    description?: StringFilter<"TechnicianFieldReport"> | string
    timeOnSite?: StringFilter<"TechnicianFieldReport"> | string
    parts?: StringNullableFilter<"TechnicianFieldReport"> | string | null
  }

  export type TechnicianReviewUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: TechnicianReviewWhereUniqueInput
    update: XOR<TechnicianReviewUpdateWithoutTechnicianInput, TechnicianReviewUncheckedUpdateWithoutTechnicianInput>
    create: XOR<TechnicianReviewCreateWithoutTechnicianInput, TechnicianReviewUncheckedCreateWithoutTechnicianInput>
  }

  export type TechnicianReviewUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: TechnicianReviewWhereUniqueInput
    data: XOR<TechnicianReviewUpdateWithoutTechnicianInput, TechnicianReviewUncheckedUpdateWithoutTechnicianInput>
  }

  export type TechnicianReviewUpdateManyWithWhereWithoutTechnicianInput = {
    where: TechnicianReviewScalarWhereInput
    data: XOR<TechnicianReviewUpdateManyMutationInput, TechnicianReviewUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type TechnicianReviewScalarWhereInput = {
    AND?: TechnicianReviewScalarWhereInput | TechnicianReviewScalarWhereInput[]
    OR?: TechnicianReviewScalarWhereInput[]
    NOT?: TechnicianReviewScalarWhereInput | TechnicianReviewScalarWhereInput[]
    id?: StringFilter<"TechnicianReview"> | string
    technicianId?: StringFilter<"TechnicianReview"> | string
    reviewer?: StringFilter<"TechnicianReview"> | string
    rating?: IntFilter<"TechnicianReview"> | number
    date?: DateTimeFilter<"TechnicianReview"> | Date | string
    comment?: StringFilter<"TechnicianReview"> | string
  }

  export type TechnicianMetricUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: TechnicianMetricWhereUniqueInput
    update: XOR<TechnicianMetricUpdateWithoutTechnicianInput, TechnicianMetricUncheckedUpdateWithoutTechnicianInput>
    create: XOR<TechnicianMetricCreateWithoutTechnicianInput, TechnicianMetricUncheckedCreateWithoutTechnicianInput>
  }

  export type TechnicianMetricUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: TechnicianMetricWhereUniqueInput
    data: XOR<TechnicianMetricUpdateWithoutTechnicianInput, TechnicianMetricUncheckedUpdateWithoutTechnicianInput>
  }

  export type TechnicianMetricUpdateManyWithWhereWithoutTechnicianInput = {
    where: TechnicianMetricScalarWhereInput
    data: XOR<TechnicianMetricUpdateManyMutationInput, TechnicianMetricUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type TechnicianMetricScalarWhereInput = {
    AND?: TechnicianMetricScalarWhereInput | TechnicianMetricScalarWhereInput[]
    OR?: TechnicianMetricScalarWhereInput[]
    NOT?: TechnicianMetricScalarWhereInput | TechnicianMetricScalarWhereInput[]
    id?: StringFilter<"TechnicianMetric"> | string
    technicianId?: StringFilter<"TechnicianMetric"> | string
    label?: StringFilter<"TechnicianMetric"> | string
    benchmark?: FloatFilter<"TechnicianMetric"> | number
    score?: FloatFilter<"TechnicianMetric"> | number
  }

  export type CustomerCreateWithoutTicketsInput = {
    id?: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    plan?: PlanCreateNestedOneWithoutCustomersInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTicketsInput = {
    id?: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    planId?: string | null
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTicketsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
  }

  export type TechnicianCreateWithoutTicketsInput = {
    id?: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTechnicianInput
    jobs?: JobCreateNestedManyWithoutTechnicianInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateWithoutTicketsInput = {
    id?: string
    userId: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewUncheckedCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianCreateOrConnectWithoutTicketsInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutTicketsInput, TechnicianUncheckedCreateWithoutTicketsInput>
  }

  export type JobCreateWithoutTicketInput = {
    id?: string
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft?: string | null
    issue: string
    accessNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technician?: TechnicianCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutTicketInput = {
    id?: string
    technicianId?: string | null
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft?: string | null
    issue: string
    accessNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutTicketInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutTicketInput, JobUncheckedCreateWithoutTicketInput>
  }

  export type TechnicianFieldReportCreateWithoutTicketInput = {
    id?: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
    technician: TechnicianCreateNestedOneWithoutFieldReportsInput
  }

  export type TechnicianFieldReportUncheckedCreateWithoutTicketInput = {
    id?: string
    technicianId: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
  }

  export type TechnicianFieldReportCreateOrConnectWithoutTicketInput = {
    where: TechnicianFieldReportWhereUniqueInput
    create: XOR<TechnicianFieldReportCreateWithoutTicketInput, TechnicianFieldReportUncheckedCreateWithoutTicketInput>
  }

  export type TechnicianFieldReportCreateManyTicketInputEnvelope = {
    data: TechnicianFieldReportCreateManyTicketInput | TechnicianFieldReportCreateManyTicketInput[]
  }

  export type CustomerUpsertWithoutTicketsInput = {
    update: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type CustomerUpdateWithoutTicketsInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    plan?: PlanUpdateOneWithoutCustomersNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTicketsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TechnicianUpsertWithoutTicketsInput = {
    update: XOR<TechnicianUpdateWithoutTicketsInput, TechnicianUncheckedUpdateWithoutTicketsInput>
    create: XOR<TechnicianCreateWithoutTicketsInput, TechnicianUncheckedCreateWithoutTicketsInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutTicketsInput, TechnicianUncheckedUpdateWithoutTicketsInput>
  }

  export type TechnicianUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTechnicianNestedInput
    jobs?: JobUpdateManyWithoutTechnicianNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateWithoutTicketsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUncheckedUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type JobUpsertWithoutTicketInput = {
    update: XOR<JobUpdateWithoutTicketInput, JobUncheckedUpdateWithoutTicketInput>
    create: XOR<JobCreateWithoutTicketInput, JobUncheckedCreateWithoutTicketInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutTicketInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutTicketInput, JobUncheckedUpdateWithoutTicketInput>
  }

  export type JobUpdateWithoutTicketInput = {
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: TechnicianUpdateOneWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutTicketInput = {
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicianFieldReportUpsertWithWhereUniqueWithoutTicketInput = {
    where: TechnicianFieldReportWhereUniqueInput
    update: XOR<TechnicianFieldReportUpdateWithoutTicketInput, TechnicianFieldReportUncheckedUpdateWithoutTicketInput>
    create: XOR<TechnicianFieldReportCreateWithoutTicketInput, TechnicianFieldReportUncheckedCreateWithoutTicketInput>
  }

  export type TechnicianFieldReportUpdateWithWhereUniqueWithoutTicketInput = {
    where: TechnicianFieldReportWhereUniqueInput
    data: XOR<TechnicianFieldReportUpdateWithoutTicketInput, TechnicianFieldReportUncheckedUpdateWithoutTicketInput>
  }

  export type TechnicianFieldReportUpdateManyWithWhereWithoutTicketInput = {
    where: TechnicianFieldReportScalarWhereInput
    data: XOR<TechnicianFieldReportUpdateManyMutationInput, TechnicianFieldReportUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCreateWithoutJobInput = {
    id?: string
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTicketsInput
    assignedTo?: TechnicianCreateNestedOneWithoutTicketsInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutJobInput = {
    id?: string
    customerId: string
    assignedToId?: string | null
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutJobInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutJobInput, TicketUncheckedCreateWithoutJobInput>
  }

  export type TechnicianCreateWithoutJobsInput = {
    id?: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTechnicianInput
    tickets?: TicketCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateWithoutJobsInput = {
    id?: string
    userId: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewUncheckedCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianCreateOrConnectWithoutJobsInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutJobsInput, TechnicianUncheckedCreateWithoutJobsInput>
  }

  export type TicketUpsertWithoutJobInput = {
    update: XOR<TicketUpdateWithoutJobInput, TicketUncheckedUpdateWithoutJobInput>
    create: XOR<TicketCreateWithoutJobInput, TicketUncheckedCreateWithoutJobInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutJobInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutJobInput, TicketUncheckedUpdateWithoutJobInput>
  }

  export type TicketUpdateWithoutJobInput = {
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
    assignedTo?: TechnicianUpdateOneWithoutTicketsNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutJobInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TechnicianUpsertWithoutJobsInput = {
    update: XOR<TechnicianUpdateWithoutJobsInput, TechnicianUncheckedUpdateWithoutJobsInput>
    create: XOR<TechnicianCreateWithoutJobsInput, TechnicianUncheckedCreateWithoutJobsInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutJobsInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutJobsInput, TechnicianUncheckedUpdateWithoutJobsInput>
  }

  export type TechnicianUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTechnicianNestedInput
    tickets?: TicketUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateWithoutJobsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUncheckedUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type CustomerCreateWithoutInvoicesInput = {
    id?: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    plan?: PlanCreateNestedOneWithoutCustomersInput
    tickets?: TicketCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutInvoicesInput = {
    id?: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    planId?: string | null
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutInvoicesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
  }

  export type PlanCreateWithoutInvoicesInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    customers?: CustomerCreateNestedManyWithoutPlanInput
    requests?: UpgradeRequestCreateNestedManyWithoutInitialPlanInput
    finalPlans?: UpgradeRequestCreateNestedManyWithoutFinalPlanInput
  }

  export type PlanUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    customers?: CustomerUncheckedCreateNestedManyWithoutPlanInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutInitialPlanInput
    finalPlans?: UpgradeRequestUncheckedCreateNestedManyWithoutFinalPlanInput
  }

  export type PlanCreateOrConnectWithoutInvoicesInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutInvoicesInput, PlanUncheckedCreateWithoutInvoicesInput>
  }

  export type PaymentCreateWithoutInvoiceInput = {
    id?: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    customerId: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
  }

  export type CustomerUpsertWithoutInvoicesInput = {
    update: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type CustomerUpdateWithoutInvoicesInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    plan?: PlanUpdateOneWithoutCustomersNestedInput
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInvoicesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PlanUpsertWithoutInvoicesInput = {
    update: XOR<PlanUpdateWithoutInvoicesInput, PlanUncheckedUpdateWithoutInvoicesInput>
    create: XOR<PlanCreateWithoutInvoicesInput, PlanUncheckedCreateWithoutInvoicesInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutInvoicesInput, PlanUncheckedUpdateWithoutInvoicesInput>
  }

  export type PlanUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    customers?: CustomerUpdateManyWithoutPlanNestedInput
    requests?: UpgradeRequestUpdateManyWithoutInitialPlanNestedInput
    finalPlans?: UpgradeRequestUpdateManyWithoutFinalPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    customers?: CustomerUncheckedUpdateManyWithoutPlanNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutInitialPlanNestedInput
    finalPlans?: UpgradeRequestUncheckedUpdateManyWithoutFinalPlanNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type CustomerCreateWithoutPaymentsInput = {
    id?: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    plan?: PlanCreateNestedOneWithoutCustomersInput
    tickets?: TicketCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    planId?: string | null
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPaymentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceCreateWithoutPaymentsInput = {
    id?: string
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoicesInput
    plan?: PlanCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: string
    customerId: string
    planId?: string | null
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
  }

  export type CustomerUpsertWithoutPaymentsInput = {
    update: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerUpdateWithoutPaymentsInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    plan?: PlanUpdateOneWithoutCustomersNestedInput
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPaymentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateWithoutPaymentsInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    plan?: PlanUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutRequestsInput = {
    id?: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    plan?: PlanCreateNestedOneWithoutCustomersInput
    tickets?: TicketCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutRequestsInput = {
    id?: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    planId?: string | null
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutRequestsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRequestsInput, CustomerUncheckedCreateWithoutRequestsInput>
  }

  export type PlanCreateWithoutRequestsInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    customers?: CustomerCreateNestedManyWithoutPlanInput
    invoices?: InvoiceCreateNestedManyWithoutPlanInput
    finalPlans?: UpgradeRequestCreateNestedManyWithoutFinalPlanInput
  }

  export type PlanUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    customers?: CustomerUncheckedCreateNestedManyWithoutPlanInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPlanInput
    finalPlans?: UpgradeRequestUncheckedCreateNestedManyWithoutFinalPlanInput
  }

  export type PlanCreateOrConnectWithoutRequestsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutRequestsInput, PlanUncheckedCreateWithoutRequestsInput>
  }

  export type PlanCreateWithoutFinalPlansInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    customers?: CustomerCreateNestedManyWithoutPlanInput
    invoices?: InvoiceCreateNestedManyWithoutPlanInput
    requests?: UpgradeRequestCreateNestedManyWithoutInitialPlanInput
  }

  export type PlanUncheckedCreateWithoutFinalPlansInput = {
    id?: string
    name: string
    type: string
    speed?: string | null
    cost?: number | null
    status?: $Enums.PlanStatus
    customers?: CustomerUncheckedCreateNestedManyWithoutPlanInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPlanInput
    requests?: UpgradeRequestUncheckedCreateNestedManyWithoutInitialPlanInput
  }

  export type PlanCreateOrConnectWithoutFinalPlansInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutFinalPlansInput, PlanUncheckedCreateWithoutFinalPlansInput>
  }

  export type CustomerUpsertWithoutRequestsInput = {
    update: XOR<CustomerUpdateWithoutRequestsInput, CustomerUncheckedUpdateWithoutRequestsInput>
    create: XOR<CustomerCreateWithoutRequestsInput, CustomerUncheckedCreateWithoutRequestsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutRequestsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutRequestsInput, CustomerUncheckedUpdateWithoutRequestsInput>
  }

  export type CustomerUpdateWithoutRequestsInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    plan?: PlanUpdateOneWithoutCustomersNestedInput
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutRequestsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PlanUpsertWithoutRequestsInput = {
    update: XOR<PlanUpdateWithoutRequestsInput, PlanUncheckedUpdateWithoutRequestsInput>
    create: XOR<PlanCreateWithoutRequestsInput, PlanUncheckedCreateWithoutRequestsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutRequestsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutRequestsInput, PlanUncheckedUpdateWithoutRequestsInput>
  }

  export type PlanUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    customers?: CustomerUpdateManyWithoutPlanNestedInput
    invoices?: InvoiceUpdateManyWithoutPlanNestedInput
    finalPlans?: UpgradeRequestUpdateManyWithoutFinalPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    customers?: CustomerUncheckedUpdateManyWithoutPlanNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPlanNestedInput
    finalPlans?: UpgradeRequestUncheckedUpdateManyWithoutFinalPlanNestedInput
  }

  export type PlanUpsertWithoutFinalPlansInput = {
    update: XOR<PlanUpdateWithoutFinalPlansInput, PlanUncheckedUpdateWithoutFinalPlansInput>
    create: XOR<PlanCreateWithoutFinalPlansInput, PlanUncheckedCreateWithoutFinalPlansInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutFinalPlansInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutFinalPlansInput, PlanUncheckedUpdateWithoutFinalPlansInput>
  }

  export type PlanUpdateWithoutFinalPlansInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    customers?: CustomerUpdateManyWithoutPlanNestedInput
    invoices?: InvoiceUpdateManyWithoutPlanNestedInput
    requests?: UpgradeRequestUpdateManyWithoutInitialPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutFinalPlansInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    speed?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    customers?: CustomerUncheckedUpdateManyWithoutPlanNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutPlanNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutInitialPlanNestedInput
  }

  export type TechnicianCreateWithoutReviewsInput = {
    id?: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTechnicianInput
    jobs?: JobCreateNestedManyWithoutTechnicianInput
    tickets?: TicketCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianCreateOrConnectWithoutReviewsInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutReviewsInput, TechnicianUncheckedCreateWithoutReviewsInput>
  }

  export type TechnicianUpsertWithoutReviewsInput = {
    update: XOR<TechnicianUpdateWithoutReviewsInput, TechnicianUncheckedUpdateWithoutReviewsInput>
    create: XOR<TechnicianCreateWithoutReviewsInput, TechnicianUncheckedCreateWithoutReviewsInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutReviewsInput, TechnicianUncheckedUpdateWithoutReviewsInput>
  }

  export type TechnicianUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTechnicianNestedInput
    jobs?: JobUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateWithoutReviewsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianCreateWithoutFieldReportsInput = {
    id?: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTechnicianInput
    jobs?: JobCreateNestedManyWithoutTechnicianInput
    tickets?: TicketCreateNestedManyWithoutAssignedToInput
    reviews?: TechnicianReviewCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateWithoutFieldReportsInput = {
    id?: string
    userId: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    reviews?: TechnicianReviewUncheckedCreateNestedManyWithoutTechnicianInput
    metrics?: TechnicianMetricUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianCreateOrConnectWithoutFieldReportsInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutFieldReportsInput, TechnicianUncheckedCreateWithoutFieldReportsInput>
  }

  export type TicketCreateWithoutFieldReportsInput = {
    id?: string
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTicketsInput
    assignedTo?: TechnicianCreateNestedOneWithoutTicketsInput
    job?: JobCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutFieldReportsInput = {
    id?: string
    customerId: string
    assignedToId?: string | null
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    job?: JobUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutFieldReportsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutFieldReportsInput, TicketUncheckedCreateWithoutFieldReportsInput>
  }

  export type TechnicianUpsertWithoutFieldReportsInput = {
    update: XOR<TechnicianUpdateWithoutFieldReportsInput, TechnicianUncheckedUpdateWithoutFieldReportsInput>
    create: XOR<TechnicianCreateWithoutFieldReportsInput, TechnicianUncheckedCreateWithoutFieldReportsInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutFieldReportsInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutFieldReportsInput, TechnicianUncheckedUpdateWithoutFieldReportsInput>
  }

  export type TechnicianUpdateWithoutFieldReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTechnicianNestedInput
    jobs?: JobUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUpdateManyWithoutAssignedToNestedInput
    reviews?: TechnicianReviewUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateWithoutFieldReportsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    reviews?: TechnicianReviewUncheckedUpdateManyWithoutTechnicianNestedInput
    metrics?: TechnicianMetricUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type TicketUpsertWithoutFieldReportsInput = {
    update: XOR<TicketUpdateWithoutFieldReportsInput, TicketUncheckedUpdateWithoutFieldReportsInput>
    create: XOR<TicketCreateWithoutFieldReportsInput, TicketUncheckedCreateWithoutFieldReportsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutFieldReportsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutFieldReportsInput, TicketUncheckedUpdateWithoutFieldReportsInput>
  }

  export type TicketUpdateWithoutFieldReportsInput = {
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
    assignedTo?: TechnicianUpdateOneWithoutTicketsNestedInput
    job?: JobUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutFieldReportsInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TechnicianCreateWithoutMetricsInput = {
    id?: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTechnicianInput
    jobs?: JobCreateNestedManyWithoutTechnicianInput
    tickets?: TicketCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianUncheckedCreateWithoutMetricsInput = {
    id?: string
    userId: string
    name: string
    location: string
    phone: string
    status: $Enums.TechnicianStatus
    rating?: number
    currentJobId?: string | null
    completedJobsCount?: number
    queueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutTechnicianInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    fieldReports?: TechnicianFieldReportUncheckedCreateNestedManyWithoutTechnicianInput
    reviews?: TechnicianReviewUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type TechnicianCreateOrConnectWithoutMetricsInput = {
    where: TechnicianWhereUniqueInput
    create: XOR<TechnicianCreateWithoutMetricsInput, TechnicianUncheckedCreateWithoutMetricsInput>
  }

  export type TechnicianUpsertWithoutMetricsInput = {
    update: XOR<TechnicianUpdateWithoutMetricsInput, TechnicianUncheckedUpdateWithoutMetricsInput>
    create: XOR<TechnicianCreateWithoutMetricsInput, TechnicianUncheckedCreateWithoutMetricsInput>
    where?: TechnicianWhereInput
  }

  export type TechnicianUpdateToOneWithWhereWithoutMetricsInput = {
    where?: TechnicianWhereInput
    data: XOR<TechnicianUpdateWithoutMetricsInput, TechnicianUncheckedUpdateWithoutMetricsInput>
  }

  export type TechnicianUpdateWithoutMetricsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTechnicianNestedInput
    jobs?: JobUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUpdateManyWithoutTechnicianNestedInput
  }

  export type TechnicianUncheckedUpdateWithoutMetricsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumTechnicianStatusFieldUpdateOperationsInput | $Enums.TechnicianStatus
    rating?: FloatFieldUpdateOperationsInput | number
    currentJobId?: NullableStringFieldUpdateOperationsInput | string | null
    completedJobsCount?: IntFieldUpdateOperationsInput | number
    queueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutTechnicianNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianNestedInput
    reviews?: TechnicianReviewUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type TicketCreateManyCustomerInput = {
    id?: string
    assignedToId?: string | null
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyCustomerInput = {
    id?: string
    planId?: string | null
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
  }

  export type PaymentCreateManyCustomerInput = {
    id?: string
    invoiceId: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type UpgradeRequestCreateManyCustomerInput = {
    id?: string
    initialPlanId?: string | null
    finalPlanId?: string | null
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
  }

  export type TicketUpdateWithoutCustomerInput = {
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: TechnicianUpdateOneWithoutTicketsNestedInput
    job?: JobUpdateOneWithoutTicketNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCustomerInput = {
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUncheckedUpdateOneWithoutTicketNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCustomerInput = {
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutCustomerInput = {
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCustomerInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpgradeRequestUpdateWithoutCustomerInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
    initialPlan?: PlanUpdateOneWithoutRequestsNestedInput
    finalPlan?: PlanUpdateOneWithoutFinalPlansNestedInput
  }

  export type UpgradeRequestUncheckedUpdateWithoutCustomerInput = {
    initialPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type UpgradeRequestUncheckedUpdateManyWithoutCustomerInput = {
    initialPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type CustomerCreateManyPlanInput = {
    id?: string
    userId: string
    accountId: string
    name: string
    email: string
    type: $Enums.CustomerType
    usage?: string | null
    balance?: string | null
    status: $Enums.PlanStatus
    area?: string | null
    since?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyPlanInput = {
    id?: string
    customerId: string
    invoiceNumber: string
    email: string
    contact: string
    amount: number
    dueDate: Date | string
    paymentMethod?: string | null
    status: $Enums.InvoiceStatus
    createdAt?: Date | string
  }

  export type UpgradeRequestCreateManyInitialPlanInput = {
    id?: string
    customerId: string
    finalPlanId?: string | null
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
  }

  export type UpgradeRequestCreateManyFinalPlanInput = {
    id?: string
    customerId: string
    initialPlanId?: string | null
    requestedAt?: Date | string
    status: $Enums.UpgradeStatus
  }

  export type CustomerUpdateWithoutPlanInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPlanInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    requests?: UpgradeRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutPlanInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    usage?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    area?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutPlanInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPlanInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutPlanInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpgradeRequestUpdateWithoutInitialPlanInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
    customer?: CustomerUpdateOneRequiredWithoutRequestsNestedInput
    finalPlan?: PlanUpdateOneWithoutFinalPlansNestedInput
  }

  export type UpgradeRequestUncheckedUpdateWithoutInitialPlanInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    finalPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type UpgradeRequestUncheckedUpdateManyWithoutInitialPlanInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    finalPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type UpgradeRequestUpdateWithoutFinalPlanInput = {
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
    customer?: CustomerUpdateOneRequiredWithoutRequestsNestedInput
    initialPlan?: PlanUpdateOneWithoutRequestsNestedInput
  }

  export type UpgradeRequestUncheckedUpdateWithoutFinalPlanInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    initialPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type UpgradeRequestUncheckedUpdateManyWithoutFinalPlanInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    initialPlanId?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUpgradeStatusFieldUpdateOperationsInput | $Enums.UpgradeStatus
  }

  export type JobCreateManyTechnicianInput = {
    id?: string
    ticketId: string
    subscriber: string
    address: string
    phone: string
    priority: $Enums.JobPriority
    status: $Enums.JobStatus
    timeLeft?: string | null
    issue: string
    accessNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyAssignedToInput = {
    id?: string
    customerId: string
    ticketNumber: string
    issue: string
    category: string
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    sla?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TechnicianFieldReportCreateManyTechnicianInput = {
    id?: string
    ticketId: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
  }

  export type TechnicianReviewCreateManyTechnicianInput = {
    id?: string
    reviewer: string
    rating: number
    date: Date | string
    comment: string
  }

  export type TechnicianMetricCreateManyTechnicianInput = {
    id?: string
    label: string
    benchmark: number
    score: number
  }

  export type JobUpdateWithoutTechnicianInput = {
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutTechnicianInput = {
    ticketId?: StringFieldUpdateOperationsInput | string
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyWithoutTechnicianInput = {
    ticketId?: StringFieldUpdateOperationsInput | string
    subscriber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    priority?: EnumJobPriorityFieldUpdateOperationsInput | $Enums.JobPriority
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    timeLeft?: NullableStringFieldUpdateOperationsInput | string | null
    issue?: StringFieldUpdateOperationsInput | string
    accessNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutAssignedToInput = {
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTicketsNestedInput
    job?: JobUpdateOneWithoutTicketNestedInput
    fieldReports?: TechnicianFieldReportUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAssignedToInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUncheckedUpdateOneWithoutTicketNestedInput
    fieldReports?: TechnicianFieldReportUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutAssignedToInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    sla?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicianFieldReportUpdateWithoutTechnicianInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: TicketUpdateOneRequiredWithoutFieldReportsNestedInput
  }

  export type TechnicianFieldReportUncheckedUpdateWithoutTechnicianInput = {
    ticketId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicianFieldReportUncheckedUpdateManyWithoutTechnicianInput = {
    ticketId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicianReviewUpdateWithoutTechnicianInput = {
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TechnicianReviewUncheckedUpdateWithoutTechnicianInput = {
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TechnicianReviewUncheckedUpdateManyWithoutTechnicianInput = {
    reviewer?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type TechnicianMetricUpdateWithoutTechnicianInput = {
    label?: StringFieldUpdateOperationsInput | string
    benchmark?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type TechnicianMetricUncheckedUpdateWithoutTechnicianInput = {
    label?: StringFieldUpdateOperationsInput | string
    benchmark?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type TechnicianMetricUncheckedUpdateManyWithoutTechnicianInput = {
    label?: StringFieldUpdateOperationsInput | string
    benchmark?: FloatFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
  }

  export type TechnicianFieldReportCreateManyTicketInput = {
    id?: string
    technicianId: string
    date: Date | string
    status: string
    description: string
    timeOnSite: string
    parts?: string | null
  }

  export type TechnicianFieldReportUpdateWithoutTicketInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
    technician?: TechnicianUpdateOneRequiredWithoutFieldReportsNestedInput
  }

  export type TechnicianFieldReportUncheckedUpdateWithoutTicketInput = {
    technicianId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicianFieldReportUncheckedUpdateManyWithoutTicketInput = {
    technicianId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeOnSite?: StringFieldUpdateOperationsInput | string
    parts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateManyInvoiceInput = {
    id?: string
    customerId: string
    period: string
    amount: number
    due?: Date | string | null
    method?: string | null
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutInvoiceInput = {
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TechnicianCountOutputTypeDefaultArgs instead
     */
    export type TechnicianCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TechnicianCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketCountOutputTypeDefaultArgs instead
     */
    export type TicketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceCountOutputTypeDefaultArgs instead
     */
    export type InvoiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TechnicianDefaultArgs instead
     */
    export type TechnicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TechnicianDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketDefaultArgs instead
     */
    export type TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDefaultArgs instead
     */
    export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UpgradeRequestDefaultArgs instead
     */
    export type UpgradeRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UpgradeRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TechnicianReviewDefaultArgs instead
     */
    export type TechnicianReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TechnicianReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TechnicianFieldReportDefaultArgs instead
     */
    export type TechnicianFieldReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TechnicianFieldReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TechnicianMetricDefaultArgs instead
     */
    export type TechnicianMetricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TechnicianMetricDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}