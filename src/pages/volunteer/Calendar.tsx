import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, MapPin, Clock, Users, CheckCircle, Plus, Filter, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';
import { mockActivities } from '@/lib/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const navigation = [
  { name: 'Dashboard', href: '/volunteer/dashboard', icon: CalendarIcon, current: false },
  { name: 'Activities', href: '/volunteer/activities', icon: CalendarIcon, current: false },
  { name: 'Sightings', href: '/volunteer/sightings', icon: MapPin, current: false },
  { name: 'Reports', href: '/volunteer/reports', icon: CheckCircle, current: false },
  { name: 'Training', href: '/volunteer/training', icon: Users, current: false },
  { name: 'Calendar', href: '/volunteer/calendar', icon: CalendarIcon, current: true },
];

// Mock calendar events based on activities
const calendarEvents = [
  {
    id: 1,
    title: "Wetland Bird Survey",
    date: new Date(2024, 2, 20), // March 20, 2024
    time: "06:00",
    duration: "4 hours",
    location: "Lac de Tunis",
    type: "field_survey",
    status: "registered",
    participants: 12
  },
  {
    id: 2,
    title: "Spring Migration Count",
    date: new Date(2024, 2, 25), // March 25, 2024
    time: "05:30",
    duration: "6 hours",
    location: "Parc National d'Ichkeul",
    type: "census",
    status: "registered",
    participants: 8
  },
  {
    id: 3,
    title: "Bird Photography Workshop",
    date: new Date(2024, 2, 28), // March 28, 2024
    time: "09:00",
    duration: "3 hours",
    location: "Sidi Bou Said",
    type: "training",
    status: "available",
    participants: 6
  },
  {
    id: 4,
    title: "Conservation Action Meeting",
    date: new Date(2024, 3, 5), // April 5, 2024
    time: "14:00",
    duration: "2 hours",
    location: "AAO Headquarters",
    type: "meeting",
    status: "registered",
    participants: 15
  },
  {
    id: 5,
    title: "Night Owl Survey",
    date: new Date(2024, 3, 12), // April 12, 2024
    time: "20:00",
    duration: "4 hours",
    location: "Forêt de Bou Kornine",
    type: "field_survey",
    status: "available",
    participants: 4
  }
];

export default function VolunteerCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredEvents = calendarEvents.filter(event => {
    if (filterType === 'all') return true;
    if (filterType === 'my-events') return event.status === 'registered';
    return event.type === filterType;
  });

  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter(event => isSameDay(event.date, date));
  };

  const selectedDateEvents = getEventsForDate(selectedDate);
  const upcomingEvents = filteredEvents.filter(event => event.date >= new Date()).slice(0, 5);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'field_survey': return 'bg-green-100 text-green-800 border-green-200';
      case 'census': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'training': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'meeting': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'registered': return 'bg-green-100 text-green-800';
      case 'available': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout title="Event Calendar" navigation={navigation}>
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex items-center gap-4">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter events" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="my-events">My Events</SelectItem>
                <SelectItem value="field_survey">Field Surveys</SelectItem>
                <SelectItem value="census">Bird Census</SelectItem>
                <SelectItem value="training">Training</SelectItem>
                <SelectItem value="meeting">Meetings</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center gap-1 border rounded-lg">
              <Button
                variant={viewMode === 'month' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('month')}
              >
                Month
              </Button>
              <Button
                variant={viewMode === 'week' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('week')}
              >
                Week
              </Button>
              <Button
                variant={viewMode === 'day' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('day')}
              >
                Day
              </Button>
            </div>
          </div>
          
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Request New Event
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Scheduled events
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Events</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">3</div>
              <p className="text-xs text-muted-foreground">
                Registered activities
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available</CardTitle>
              <Plus className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">5</div>
              <p className="text-xs text-muted-foreground">
                Open for registration
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Planned</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Event Calendar
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="font-medium min-w-[120px] text-center">
                      {format(selectedDate, 'MMMM yyyy')}
                    </span>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-md border"
                  components={{
                    Day: ({ date, ...props }) => {
                      const events = getEventsForDate(date);
                      const hasEvents = events.length > 0;
                      
                      return (
                        <div className="relative">
                          <button
                            {...props}
                            className={`
                              w-full h-12 p-1 text-sm hover:bg-accent hover:text-accent-foreground
                              ${isSameDay(date, selectedDate) ? 'bg-primary text-primary-foreground' : ''}
                              ${isToday(date) ? 'bg-accent text-accent-foreground font-bold' : ''}
                              ${!isSameMonth(date, selectedDate) ? 'text-muted-foreground' : ''}
                              rounded-md
                            `}
                          >
                            <div className="flex flex-col items-center">
                              <span>{format(date, 'd')}</span>
                              {hasEvents && (
                                <div className="flex gap-1 mt-1">
                                  {events.slice(0, 3).map((event, i) => (
                                    <div
                                      key={i}
                                      className={`w-1.5 h-1.5 rounded-full ${
                                        event.type === 'field_survey' ? 'bg-green-500' :
                                        event.type === 'census' ? 'bg-blue-500' :
                                        event.type === 'training' ? 'bg-purple-500' :
                                        'bg-orange-500'
                                      }`}
                                    />
                                  ))}
                                  {events.length > 3 && (
                                    <span className="text-xs">+{events.length - 3}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </button>
                        </div>
                      );
                    }
                  }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Date Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  {format(selectedDate, 'MMMM d, yyyy')}
                </CardTitle>
                <CardDescription>
                  Events for selected date
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-3">
                    {selectedDateEvents.map((event) => (
                      <div key={event.id} className={`p-3 rounded-lg border ${getTypeColor(event.type)}`}>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                              <span>•</span>
                              <span>{event.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className={`text-xs ${getStatusColor(event.status)}`}>
                            {event.status === 'registered' ? 'Registered' : 'Available'}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>{event.participants} participants</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No events scheduled for this date</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Next scheduled activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                      <div className="space-y-1">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CalendarIcon className="h-3 w-3" />
                          <span>{format(event.date, 'MMM d')}</span>
                          <span>•</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getStatusColor(event.status)}`}>
                        {event.status === 'registered' ? 'Registered' : 'Available'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Event Legend */}
            <Card>
              <CardHeader>
                <CardTitle>Event Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">Field Surveys</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Bird Census</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm">Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-sm">Meetings</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}