import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MapPin, MessageCircle, Search, Send, Plus, Paperclip, MoreVertical, Star, Archive, Trash2, Reply, Forward } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Dashboard', href: '/volunteer/dashboard', icon: Calendar, current: false },
  { name: 'Activities', href: '/volunteer/activities', icon: Calendar, current: false },
  { name: 'Sightings', href: '/volunteer/sightings', icon: MapPin, current: false },
  { name: 'Reports', href: '/volunteer/reports', icon: MessageCircle, current: false },
  { name: 'Training', href: '/volunteer/training', icon: MessageCircle, current: false },
  { name: 'Messages', href: '/volunteer/messages', icon: MessageCircle, current: true },
];

const messages = [
  {
    id: 1,
    subject: "Welcome to the Spring Migration Survey!",
    sender: "Dr. Ahmed Benali",
    senderRole: "Scientific Coordinator",
    avatar: "/avatars/ahmed.jpg",
    date: "2024-03-15",
    time: "09:30",
    unread: true,
    important: true,
    category: "announcement",
    preview: "We're excited to have you join our spring migration monitoring program. Here are the key details you need to know...",
    content: `Dear Fatima,

We're excited to have you join our spring migration monitoring program! Your expertise and dedication make you an invaluable part of our conservation efforts.

**Key Information:**
- Survey Period: March 20 - May 15, 2024
- Meeting Point: Lac de Tunis Visitor Center
- Start Time: 6:00 AM (early morning surveys)
- Equipment: Binoculars and field guide provided

**This Week's Focus Species:**
- European Bee-eater (Merops apiaster)
- Common Swallow (Hirundo rustica)
- White Stork (Ciconia ciconia)

Please confirm your participation by replying to this message. Looking forward to working with you!

Best regards,
Dr. Ahmed Benali
Scientific Coordinator
Association Amis des Oiseaux`
  },
  {
    id: 2,
    subject: "Your Great Egret Sighting - Verification Complete",
    sender: "Sarah Martinez",
    senderRole: "Verification Specialist",
    avatar: "/avatars/sarah.jpg",
    date: "2024-03-14",
    time: "14:15",
    unread: true,
    important: false,
    category: "verification",
    preview: "Congratulations! Your Great Egret sighting from March 12th has been successfully verified...",
    content: `Hi Fatima,

Great news! Your Great Egret (Ardea alba) sighting from March 12th at Lac de Tunis has been successfully verified and added to our database.

**Verification Details:**
- Species: Great Egret (Ardea alba)
- Location: Lac de Tunis (36.8356°N, 10.2239°E)
- Date: March 12, 2024
- Count: 3 individuals
- Behavior: Feeding in shallow water
- Photo Quality: Excellent

This is a significant record as Great Egrets are becoming more common in Tunisia during winter months. Your observation contributes valuable data to our migration patterns study.

Keep up the excellent work!

Best,
Sarah Martinez
Verification Specialist`
  },
  {
    id: 3,
    subject: "Training Module: Advanced Bird Photography",
    sender: "Training Department",
    senderRole: "Automated System",
    avatar: null,
    date: "2024-03-13",
    time: "11:00",
    unread: false,
    important: false,
    category: "training",
    preview: "Your new training module 'Advanced Bird Photography' is now available. Complete it to earn your Photography Specialist badge...",
    content: `Dear Volunteer,

Your new training module "Advanced Bird Photography" is now available in your learning dashboard.

**Module Overview:**
- Duration: 2.5 hours
- Lessons: 8 interactive sessions
- Practical exercises: 3 field assignments
- Certificate: Photography Specialist

**What You'll Learn:**
- Camera settings for bird photography
- Composition techniques
- Ethical wildlife photography practices
- Equipment recommendations
- Post-processing basics

Complete this module to enhance your documentation skills and earn the Photography Specialist badge.

Access your training here: [Training Dashboard]

Happy learning!
Training Department`
  },
  {
    id: 4,
    subject: "Monthly Volunteer Newsletter - March 2024",
    sender: "Communications Team",
    senderRole: "Newsletter",
    avatar: null,
    date: "2024-03-01",
    time: "08:00",
    unread: false,
    important: false,
    category: "newsletter",
    preview: "This month's highlights: New species discoveries, volunteer spotlights, upcoming events, and conservation success stories...",
    content: `March 2024 Newsletter

**This Month's Highlights:**

🎉 **New Species Records:**
- First recorded Glossy Ibis in northern Tunisia
- Increase in Flamingo populations at Lac de Tunis
- 5 rare species documented by our volunteer network

👥 **Volunteer Spotlight:**
Congratulations to our top contributors this month:
- Fatima Trabelsi: 42 species documented
- Mohamed Gharbi: 38 field survey hours
- Amina Khelifi: 8 reports published

📅 **Upcoming Events:**
- March 20: Spring Migration Kickoff
- March 25: Volunteer Training Workshop
- April 5: Bird Photography Masterclass

🌱 **Conservation Success:**
Thanks to volunteer efforts, we've identified 3 new Important Bird Areas (IBAs) in Tunisia, contributing to national conservation planning.

Keep up the amazing work!`
  }
];

export default function VolunteerMessages() {
  const [selectedMessage, setSelectedMessage] = useState(messages[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState({ to: '', subject: '', content: '' });
  const [isComposing, setIsComposing] = useState(false);

  const filteredMessages = messages.filter(message =>
    message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const unreadMessages = messages.filter(m => m.unread);
  const importantMessages = messages.filter(m => m.important);

  return (
    <DashboardLayout title="Messages & Communications" navigation={navigation}>
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search messages..." 
                className="pl-10 w-80" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Messages</SelectItem>
                <SelectItem value="announcement">Announcements</SelectItem>
                <SelectItem value="verification">Verifications</SelectItem>
                <SelectItem value="training">Training</SelectItem>
                <SelectItem value="newsletter">Newsletters</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button onClick={() => setIsComposing(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Compose Message
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{messages.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread</CardTitle>
              <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                {unreadMessages.length}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{unreadMessages.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Important</CardTitle>
              <Star className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{importantMessages.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Messages
                  <Badge variant="secondary">{filteredMessages.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[500px] overflow-y-auto">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedMessage.id === message.id ? 'bg-muted' : ''
                      } ${message.unread ? 'border-l-4 border-l-primary' : ''}`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.avatar} />
                          <AvatarFallback>
                            {message.sender.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h4 className={`text-sm font-medium truncate ${message.unread ? 'font-bold' : ''}`}>
                                {message.sender}
                              </h4>
                              {message.important && (
                                <Star className="h-3 w-3 text-yellow-600 fill-current" />
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          
                          <p className={`text-sm truncate ${message.unread ? 'font-medium' : 'text-muted-foreground'}`}>
                            {message.subject}
                          </p>
                          
                          <p className="text-xs text-muted-foreground truncate mt-1">
                            {message.preview}
                          </p>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {message.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{message.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2">
            {isComposing ? (
              <Card className="h-[600px]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Compose New Message</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setIsComposing(false)}>
                      Cancel
                    </Button>
                    <Button>
                      <Send className="h-4 w-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">To:</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select recipient" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="coordinator">Scientific Coordinator</SelectItem>
                        <SelectItem value="verification">Verification Team</SelectItem>
                        <SelectItem value="training">Training Department</SelectItem>
                        <SelectItem value="admin">Administration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject:</label>
                    <Input placeholder="Enter message subject" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message:</label>
                    <Textarea 
                      placeholder="Type your message here..." 
                      className="min-h-[300px]"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Paperclip className="h-4 w-4 mr-2" />
                      Attach File
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-[600px]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={selectedMessage.avatar} />
                      <AvatarFallback>
                        {selectedMessage.sender.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{selectedMessage.subject}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{selectedMessage.sender}</span>
                        <span>•</span>
                        <span>{selectedMessage.senderRole}</span>
                        <span>•</span>
                        <span>{selectedMessage.date} at {selectedMessage.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Reply className="h-4 w-4 mr-2" />
                        Reply
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Forward className="h-4 w-4 mr-2" />
                        Forward
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Star className="h-4 w-4 mr-2" />
                        Mark Important
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Archive className="h-4 w-4 mr-2" />
                        Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                
                <CardContent className="max-h-[450px] overflow-y-auto">
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {selectedMessage.content}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-6 pt-4 border-t">
                    <Button size="sm">
                      <Reply className="h-4 w-4 mr-2" />
                      Reply
                    </Button>
                    <Button variant="outline" size="sm">
                      <Forward className="h-4 w-4 mr-2" />
                      Forward
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}