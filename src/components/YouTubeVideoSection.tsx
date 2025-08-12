import React from 'react';
import { Play } from 'lucide-react';

const YouTubeVideoSection = () => {
  const videos = [
    {
      id: '3F_BGxWMINU',
      title: 'MVP Cricket Academy on Fox9',
      thumbnail: `https://img.youtube.com/vi/3F_BGxWMINU/maxresdefault.jpg`,
      url: 'https://youtu.be/3F_BGxWMINU?feature=shared'
    },
    {
      id: 'BGYjxLZF1F4',
      title: 'MVP Cricket Academy Training Sessions',
      thumbnail: `https://img.youtube.com/vi/BGYjxLZF1F4/maxresdefault.jpg`,
      url: 'https://youtu.be/BGYjxLZF1F4?feature=shared'
    }
  ];

  const openVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
            MVP Cricket Academy is a Youth Cricket Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            MVP Cricket Academy is a Youth Cricket Academy focused on Long Term Athlete Development (LTAD) 
            for boys and girls, in and around Minneapolis, Minnesota.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer"
              onClick={() => openVideo(video.url)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* YouTube Branding */}
                <div className="absolute bottom-4 left-4 bg-black/80 rounded px-2 py-1">
                  <span className="text-white text-xs font-medium">Watch on YouTube</span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-oswald font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideoSection;