import coachKrishantyImage from '@/assets/coach-krishanty.jpg';
import coachHeadImage from '@/assets/coach-head.jpg';
import coachCoordinatorImage from '@/assets/coach-coordinator.jpg';
import staffDirectorImage from '@/assets/staff-director.jpg';
import programBeginnerImage from '@/assets/program-beginner.jpg';
import programYouthLeagueImage from '@/assets/program-youth-league.jpg';
import programLeatherBallImage from '@/assets/program-leather-ball.jpg';
import programTennisBallImage from '@/assets/program-tennis-ball.jpg';
import galleryTrophyImage from '@/assets/gallery-trophy.jpg';
import galleryGraduationImage from '@/assets/gallery-graduation.jpg';
import galleryMatchImage from '@/assets/gallery-match.jpg';
import galleryTrainingImage from '@/assets/gallery-training.jpg';
import galleryTeamImage from '@/assets/gallery-team.jpg';
import galleryAwardsImage from '@/assets/gallery-awards.jpg';
import testimonialEmmaImage from '@/assets/testimonial-emma.jpg';
import testimonialDavidImage from '@/assets/testimonial-david.jpg';
import testimonialLisaImage from '@/assets/testimonial-lisa.jpg';
import testimonialJamesImage from '@/assets/testimonial-james.jpg';

export const programs = [
  {
    id: 1,
    title: "Beginner Cricket Program",
    description: "Perfect for ages 5-9, introducing cricket basics. Uses tennis ball and lightweight equipment in a fun, supportive environment.",
    duration: "Year-round",
    price: "Contact for pricing",
    category: "beginner",
    image: programBeginnerImage
  },
  {
    id: 2,
    title: "Youth League Program",
    description: "Competitive program for players with prior experience. Includes matches, practice sessions, and skill enhancement drills.",
    duration: "Seasonal",
    price: "Contact for pricing",
    category: "youth",
    image: programYouthLeagueImage
  },
  {
    id: 3,
    title: "Leather Ball Program",
    description: "Year-round leather ball training for advanced youth. Divided into U11, U13, U15 groups with professional coaching.",
    duration: "Year-round",
    price: "Contact for pricing",
    category: "advanced",
    image: programLeatherBallImage
  },
  {
    id: 4,
    title: "Tennis Ball Program",
    description: "Fun, social cricket games for beginners and intermediate players. Perfect for those new to the sport.",
    duration: "Flexible",
    price: "Contact for pricing",
    category: "recreational",
    image: programTennisBallImage
  }
];

export const announcements = [
  {
    id: 1,
    date: "2024-03-15",
    title: "Partnership with R66T Academy Announced",
    summary: "MVP Cricket Academy partners with R66T Academy to enhance youth cricket development.",
    content: "We're excited to announce our new partnership with R66T Academy, expanding our reach and enhancing our youth cricket development programs. This collaboration will provide our students with additional training opportunities, advanced coaching techniques, and exposure to competitive cricket at higher levels. The partnership aligns with our mission of building future cricket stars through professional coaching and structured programs.",
    category: "partnership"
  },
  {
    id: 2,
    date: "2024-03-10",
    title: "Girls Program Expanding Under Krishanty Ranasinghe",
    summary: "Our Girls Program Lead Coach is creating new opportunities for young female cricketers.",
    content: "Under the passionate leadership of Krishanty Ranasinghe, our Girls Program is expanding to create more opportunities for young girls in cricket. The program focuses on building inclusive teams and developing female talent in Minnesota. We're committed to growing women's cricket and providing equal opportunities for all young athletes to excel in this amazing sport.",
    category: "program"
  },
  {
    id: 3,
    date: "2024-03-05",
    title: "USA Cricket Collaboration",
    summary: "MVP Cricket Academy strengthens ties with USA Cricket for player development.",
    content: "We're proud to announce our collaboration with USA Cricket, the national governing body for cricket in the United States. This partnership enhances our ability to identify and develop talented young cricketers, providing pathways to higher levels of competition. Our academy continues to be at the forefront of youth cricket development in Minnesota and across the nation.",
    category: "achievement"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Parent",
    image: testimonialEmmaImage,
    text: "My daughter has been part of the academy for 2 years now. The coaches are fantastic and she's improved tremendously. She's more confident and loves the sport!"
  },
  {
    id: 2,
    name: "David Rodriguez",
    role: "Former Student",
    image: testimonialDavidImage,
    text: "The academy gave me the foundation I needed to play at the university level. The coaching staff really cares about each player's development."
  },
  {
    id: 3,
    name: "Lisa Chen",
    role: "Parent",
    image: testimonialLisaImage,
    text: "Excellent facilities and professional coaching. My son looks forward to every training session. Highly recommend this academy!"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Student",
    image: testimonialJamesImage,
    text: "Been training here for 3 years. The coaches push you to be your best while keeping it fun. Made lifelong friends here too!"
  }
];

export const coaches = [
  {
    id: 1,
    name: "Krishanty Ranasinghe",
    role: "Girls Program Lead Coach",
    image: coachKrishantyImage,
    bio: "Passionate about creating opportunities for young girls in cricket and building inclusive teams. Dedicated to developing female talent and promoting gender equality in cricket.",
    experience: "8+ years",
    specialization: "Girls Cricket Development & Team Building"
  },
  {
    id: 2,
    name: "Head Coach",
    role: "Senior Coach",
    image: coachHeadImage,
    bio: "Experienced cricket coach specializing in youth development through our Long-Term Athlete Development (LTAD) approach. Focuses on building discipline, teamwork, and passion for cricket.",
    experience: "10+ years",
    specialization: "Youth Development & LTAD"
  },
  {
    id: 3,
    name: "Program Coordinator",
    role: "Skills Development Coach",
    image: coachCoordinatorImage,
    bio: "Expert in structured cricket programs for all skill levels, from complete beginners to advanced youth players. Specializes in fundamental skills and progressive training methods.",
    experience: "7+ years",
    specialization: "Skills Development & Program Management"
  }
];

export const staff = [
  {
    id: 1,
    name: "Krishanty Ranasinghe",
    role: "Girls Program Lead Coach",
    category: "coaching",
    image: coachKrishantyImage,
    description: "Passionate about creating opportunities for young girls in cricket and building inclusive teams. Leads our expanding girls cricket program with dedication and expertise."
  },
  {
    id: 2,
    name: "Academy Director",
    role: "Operations Manager",
    category: "admin",
    image: staffDirectorImage,
    description: "Oversees all academy operations and program development. Coordinates partnerships with R66T Academy and USA Cricket to enhance player development opportunities."
  },
  {
    id: 3,
    name: "Program Coordinator",
    role: "Youth Development Specialist",
    category: "admin",
    image: coachCoordinatorImage,
    description: "Manages our comprehensive youth programs and implements our Long-Term Athlete Development (LTAD) approach. Ensures every young player receives quality coaching and mentorship."
  }
];

export const events = [
  {
    id: 1,
    date: "2024-04-15",
    title: "Inter-Academy Tournament",
    description: "Annual tournament featuring teams from 8 local academies. Great opportunity to showcase skills!",
    venue: "Central Sports Ground"
  },
  {
    id: 2,
    date: "2024-04-22",
    title: "Professional Player Workshop",
    description: "Special coaching session with former international player Marcus Thompson. Limited to 30 participants.",
    venue: "Academy Main Ground"
  },
  {
    id: 3,
    date: "2024-05-01",
    title: "Parent-Child Cricket Day",
    description: "Fun day for families! Come play cricket with your children and meet other academy families.",
    venue: "Academy Grounds"
  }
];

export const statistics = [
  { label: "Active Programs", value: "5+" },
  { label: "Students Trained", value: "200+" },
  { label: "Matches Organized", value: "50+" },
  { label: "Years Building Stars", value: "8+" }
];

export const galleryImages = [
  galleryTrophyImage,
  galleryGraduationImage,
  galleryMatchImage,
  galleryTrainingImage,
  galleryTeamImage,
  galleryAwardsImage
];