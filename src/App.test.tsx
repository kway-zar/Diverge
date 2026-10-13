import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import App from './App';

vi.mock('./components/pages/admin/LoginPage.tsx', () => ({
  default: () => <div>Login Page</div>,
}));

vi.mock('./components/pages/admin/AdminLandingPage.tsx', () => ({
  default: () => <div>Admin Dashboard</div>,
}));

vi.mock('./components/pages/customer/CustomerLandingPage.tsx', () => ({
  default: () => <div>Customer Dashboard</div>,
}));

vi.mock('./components/pages/technician/TechnicianLandingPage.tsx', () => ({
  default: () => <div>Technician Dashboard</div>,
}));

describe('App route protection', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('redirects unauthenticated users away from the admin area', async () => {
    window.history.pushState({}, '', '/admin');

    render(<App />);

    expect(await screen.findByText('Login Page')).toBeInTheDocument();
  });

  it('allows a customer session to access the customer portal', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ data: { role: 'CUSTOMER' } }),
    } as Response);

    localStorage.setItem('diverge_token', 'demo-token');
    window.history.pushState({}, '', '/customers');

    render(<App />);

    expect(await screen.findByText('Customer Dashboard')).toBeInTheDocument();
    expect(fetchSpy).toHaveBeenCalledWith(
      expect.stringContaining('/api/auth/me'),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: 'Bearer demo-token',
        }),
      })
    );
  });
});
