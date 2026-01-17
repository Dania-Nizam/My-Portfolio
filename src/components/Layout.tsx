// components/Layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-10] opacity-20"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
  