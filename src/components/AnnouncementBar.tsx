const AnnouncementBar = () => {
  return (
    <div className="bg-announcement text-announcement-foreground py-2 text-xs overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 mr-12">
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 border border-announcement-foreground rounded-full text-center leading-4 text-[8px]">✦</span>
              Lorem ipsum dolor
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 border border-announcement-foreground rounded-full text-center leading-4 text-[8px]">✦</span>
              Lorem ipsum dolor
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 border border-announcement-foreground rounded-full text-center leading-4 text-[8px]">✦</span>
              Lorem ipsum dolor
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
