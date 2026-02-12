

# Corporate Travel Analytics Dashboard – Implementation Plan

## Overview
A full-featured, role-based analytics dashboard for corporate travel & credit management. Frontend-only with realistic mock data, light background, card-heavy corporate design. Desktop and mobile responsive.

---

## Architecture Decisions

### Separated Logo Component
A dedicated `Logo` component in `src/components/Logo.tsx` that you can easily swap with your own brand assets.

### Separated Color Theme
All dashboard colors (primary brand, chart palette, status colors, metric accents) defined as CSS variables in `src/index.css` with clear comments, making it easy to rebrand by editing one file.

### Mock Data Layer
All data lives in `src/data/` files, separated by domain (credits, bookings, employees, routes, payments, tax). Easy to later replace with real API calls.

---

## Design System

- **Style**: Card-heavy corporate with distinct bordered cards, subtle shadows, structured grids
- **Background**: Light white/gray (`#FAFBFC` base)
- **Typography**: Clean sans-serif, clear hierarchy
- **Charts**: Recharts library (already installed) with a color-blind safe palette
- **Cards**: White cards with light borders and soft shadows for each metric/chart widget
- **Mobile**: Collapsible sidebar → hamburger menu, single-column card layout on small screens

---

## Global Shell

### Left Sidebar Navigation
- Collapsible sidebar with icons + labels for all 10 menu items
- Active route highlighting
- Mini icon-only mode on collapse
- Mobile: hamburger trigger in header

### Top Header Bar
- Logo component (left)
- Role switcher dropdown (Executive / Finance / Travel Manager / Admin)
- Notification icon + user avatar (right)

### Sticky Filter Bar
- Primary filters always visible: Date range picker, Department dropdown, Office/Location dropdown
- "More Filters" expandable section with Employee, Route, City, Zone, Booking type, Flight type
- Filters persist across page navigation via React context/state

---

## Pages (All 10 + Settings)

### 1. Overall Summary
- Metric strip: Passes Purchased, Credits Purchased, Flights Taken, Credits Consumed, Credits Remaining, Blocked Credits, Savings
- Donut chart for pass type composition
- Line charts for credit/flight trends over time
- Stacked bar for domestic vs international breakdown
- Department savings comparison bar chart

### 2. Credit Usage & Spend Tracking
- Two-column grid layout
- Credit usage breakdown: line + stacked bar
- Burn rate analysis with allocation reference line
- Peak vs non-peak consumption grouped bar
- Future exposure area chart

### 3. Booking & Travel Visibility
- Metric row: Total Bookings, Completed, Ongoing, Future
- Tabbed panels for each booking category
- Line charts for booking trends
- Live-style table for ongoing travel
- Advance vs short-notice grouped bar

### 4. Employee & Department Level
- Split view: charts on left, ranking table on right
- Employee credit usage horizontal bar chart
- Department usage comparison
- User activity donut + line chart

### 5. Route / Zone / Location Analysis
- Top-ranked routes bar chart + data table
- Zone-wise usage breakdown
- Travel pattern analysis line/scatter chart
- Geo-style list view (no actual map, but structured location hierarchy)

### 6. MMB Reports
- Metric strip for all 10 MMB categories (bookings, changes, cancellations, no-shows, etc.)
- Each metric expandable to line chart + drill-down data table

### 7. Payment & Finance
- Finance grid with metrics: Total Payments, Outstanding Balance, Savings
- Payment history searchable/sortable table
- Payment vs usage reconciliation dual-axis line chart

### 8. Tax & Fuel
- Two-column layout
- Total tax metrics with trend line
- Tax breakup per booking stacked bar
- Period-wise tax summary

### 9. Dashboards (Role-Based)
- Content changes based on selected role in header
- **Executive**: Metric strip + trend overview + department comparison
- **Finance**: Metric strip + reconciliation panel + outstanding balances
- **Travel Manager**: Metric strip + booking trends + route & peak analysis

### 10. Export & Scheduled Reports
- Table listing scheduled report jobs
- Fields: Report name, Frequency, Recipients, Last run, Status
- Role and report selector filters

### 11. Settings – Role-Based Access Control
- User & role assignment panel with search
- Access control matrix (Reports tab / Dashboards tab)
- Matrix grid: rows = assets, columns = roles, cells = View/Export/Drill toggles
- User-level override controls

---

## Interaction Patterns
- Metric cards are clickable (navigate to detailed views)
- Chart hover tooltips showing exact values
- Tables with sorting, search, and CSV export buttons
- Skeleton loading states on all widgets
- Empty states with helpful guidance text
- Breadcrumb navigation for drill-down pages

---

## Responsive Behavior
- **Desktop**: Full sidebar + multi-column grid
- **Tablet**: Collapsed sidebar + 2-column grid
- **Mobile**: Hamburger menu + single-column stacked cards, filter bar collapses to a "Filters" button

