function AppShell({ children }) {
  return (
    <div className="min-h-svh overflow-x-hidden bg-[#09090B] text-[#FAFAFA] antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_34rem)]" />
      <main className="relative mx-auto flex min-h-svh w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}

export default AppShell
