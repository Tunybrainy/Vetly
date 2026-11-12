import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import DashboardPage from './pages/DashboardPage'
import PatientsPage from './pages/PatientsPage'
import SchedulePage from './pages/SchedulePage'
import RecordsPage from './pages/RecordsPage'
import PrescriptionsPage from './pages/PrescriptionsPage'
import MessagesPage from './pages/MessagesPage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'
import PatientDetailPage from './pages/PatientDetailPage'
import SupportPage from './pages/SupportPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DashboardPage />} />
          <Route path="patients" element={<PatientsPage />} />
          <Route path="patients/:patientId" element={<PatientDetailPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="records" element={<RecordsPage />} />
          <Route path="prescriptions" element={<PrescriptionsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
