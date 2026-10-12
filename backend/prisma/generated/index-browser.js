
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.CustomerScalarFieldEnum = {
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

exports.Prisma.PlanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  speed: 'speed',
  cost: 'cost',
  status: 'status'
};

exports.Prisma.TechnicianScalarFieldEnum = {
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

exports.Prisma.TicketScalarFieldEnum = {
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

exports.Prisma.JobScalarFieldEnum = {
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

exports.Prisma.InvoiceScalarFieldEnum = {
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

exports.Prisma.PaymentScalarFieldEnum = {
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

exports.Prisma.UpgradeRequestScalarFieldEnum = {
  id: 'id',
  customerId: 'customerId',
  initialPlanId: 'initialPlanId',
  finalPlanId: 'finalPlanId',
  requestedAt: 'requestedAt',
  status: 'status'
};

exports.Prisma.TechnicianReviewScalarFieldEnum = {
  id: 'id',
  technicianId: 'technicianId',
  reviewer: 'reviewer',
  rating: 'rating',
  date: 'date',
  comment: 'comment'
};

exports.Prisma.TechnicianFieldReportScalarFieldEnum = {
  id: 'id',
  technicianId: 'technicianId',
  ticketId: 'ticketId',
  date: 'date',
  status: 'status',
  description: 'description',
  timeOnSite: 'timeOnSite',
  parts: 'parts'
};

exports.Prisma.TechnicianMetricScalarFieldEnum = {
  id: 'id',
  technicianId: 'technicianId',
  label: 'label',
  benchmark: 'benchmark',
  score: 'score'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER',
  TECHNICIAN: 'TECHNICIAN'
};

exports.CustomerType = exports.$Enums.CustomerType = {
  RESIDENTIAL: 'RESIDENTIAL',
  BUSINESS: 'BUSINESS',
  GOVERNMENT: 'GOVERNMENT',
  COMMERCIAL: 'COMMERCIAL'
};

exports.PlanStatus = exports.$Enums.PlanStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING',
  SUSPENDED: 'SUSPENDED'
};

exports.TechnicianStatus = exports.$Enums.TechnicianStatus = {
  ON_SITE: 'ON_SITE',
  TRAVELING: 'TRAVELING',
  AVAILABLE: 'AVAILABLE',
  OFF_DUTY: 'OFF_DUTY',
  UNAVAILABLE: 'UNAVAILABLE'
};

exports.TicketPriority = exports.$Enums.TicketPriority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.TicketStatus = exports.$Enums.TicketStatus = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED'
};

exports.JobPriority = exports.$Enums.JobPriority = {
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.JobStatus = exports.$Enums.JobStatus = {
  ASSIGNED: 'ASSIGNED',
  EN_ROUTE: 'EN_ROUTE',
  ON_SITE: 'ON_SITE'
};

exports.InvoiceStatus = exports.$Enums.InvoiceStatus = {
  PAID: 'PAID',
  PENDING: 'PENDING',
  OVERDUE: 'OVERDUE'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PAID: 'PAID',
  PENDING: 'PENDING'
};

exports.UpgradeStatus = exports.$Enums.UpgradeStatus = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  ON_HOLD: 'ON_HOLD'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
