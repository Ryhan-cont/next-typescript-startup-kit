export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <div lang="en">
        <div>Admin layout</div>
        <div>{children}</div>
      </div>
    )
  }