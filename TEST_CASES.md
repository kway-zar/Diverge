# Test Cases and Defects Log

## 12.2 Test Cases and Results

| Test Case ID | Feature/Transaction | Expected Result | Actual Result | Status |
| --- | --- | --- | --- | --- |
| TC-01 | Admin login with valid credentials | The system authenticates the user and grants access to the admin portal. | Login succeeds and the token/session is stored for the admin role. | Pass |
| TC-02 | Admin login with invalid password | The request is rejected and the user remains unauthenticated. | The API returns an authentication error and no token is issued. | Pass |
| TC-03 | Session validation with expired or invalid token | The app blocks access and clears the invalid session. | The backend returns 401 and the UI redirects to login. | Pass |
| TC-04 | Customer ticket creation | A valid customer can submit a ticket with issue, category, and description. | Ticket is created and returned with the appropriate ticket metadata. | Pass |
| TC-05 | Admin ticket listing | Admin can view all customer issues, status, priority, and SLA data. | Ticket list loads with customer, technician, and assignment details. | Pass |
| TC-06 | Technician assignment workflow | Unassigned tickets can be routed to available engineers by workload. | Auto-assignment selects the best available technician with valid queue balancing. | Pass |
| TC-07 | Technician evaluation after ticket resolution | Customer can rate a resolved technician and update the technician rating. | Evaluation is accepted only after the ticket is resolved and a technician is assigned. | Pass |
| TC-08 | Customer invoice payment | A customer can pay an outstanding invoice using the approved demo payment options. | Payment is recorded and the invoice status is updated to paid. | Pass |
| TC-09 | Billing summary and filtering | Admin can query billing totals by period and filter by status or due date. | Summary and invoice list correctly reflect the requested period and filters. | Pass |
| TC-10 | Credit note issuance | Admin can issue a credit note for a valid invoice and reason. | Credit note is created only for a valid positive amount and a valid justification. | Pass |
| TC-11 | Plan creation and activation | Admin can add a valid plan and make it available for customers. | New plan is created with active status and visible in the offering list. | Pass |
| TC-12 | Customer plan change request | Customer can request an active plan upgrade without creating duplicates. | The request is created only if the plan is valid and no pending request exists. | Pass |
| TC-13 | Admin plan review and approval | Admin can approve or hold a pending upgrade request. | Customer plan is updated and subscription data is revised accordingly. | Pass |
| TC-14 | Past-due suspension process | The system runs BR-01 suspension checks for overdue accounts. | Accounts beyond the threshold are suspended and tracked. | Pass |
| TC-15 | Role-based route protection | Customers and technicians cannot access admin-only routes; admin cannot access customer-only pages. | The API returns 401/403 and the frontend redirects to the correct portal. | Pass |

## 12.3 Defects and Corrective Actions

| Defect | Corrective Action | Status |
| --- | --- | --- |
| Invalid or expired token was not being handled consistently across protected routes. | Enforce token verification during auth middleware checks and clear invalid local session data immediately. | Resolved |
| Login requests did not validate required fields before attempting authentication. | Add request validation rules for email and password format before service execution. | Resolved |
| Duplicate invoice numbering could occur across billing periods. | Generate invoice IDs using the correct period prefix and determine the next sequence number safely. | Resolved |
| Role-based route bypass risk existed between public and protected portals. | Validate the authenticated role and enforce portal-specific access rules. | Resolved |
| Existing customers could submit multiple pending plan upgrade requests. | Reject duplicate active plan-change requests while a request remains pending. | Resolved |
| Ticket evaluation could happen too early or without a technician assignment. | Restrict evaluation to resolved assignments that include a valid technician and allow one review per ticket. | Resolved |
| Billing credit notes had no guardrails around invalid amounts or missing reasons. | Require positive amount validation and a reason length check before creating a credit note. | Resolved |
| Billing filters allowed invalid date or status values. | Validate date formats and enum values before processing invoice queries. | Resolved |

## Scope Covered in the Deep Scan

The project review covered the major functional domains present in the codebase:

- Authentication and role enforcement
- Admin customer and billing management
- Customer billing and payment flow
- Ticket creation, review, escalation, and assignment
- Technician availability and rating updates
- Plan offering, change requests, and approval lifecycle
- Frontend navigation and portal-based route guarding

These areas correspond to the actual route and UI modules in the project and reflect the system behavior currently implemented in the repository.
