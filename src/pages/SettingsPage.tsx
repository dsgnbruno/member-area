import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Moon, Sun } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'privacy' | 'appearance'>('profile');
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-8">
        <Settings size={24} className="text-primary" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-base-100 rounded-box p-4 shadow-lg">
            <ul className="menu w-full">
              <li>
                <a 
                  className={activeTab === 'profile' ? 'active' : ''}
                  onClick={() => setActiveTab('profile')}
                >
                  <User size={18} />
                  Profile
                </a>
              </li>
              <li>
                <a 
                  className={activeTab === 'notifications' ? 'active' : ''}
                  onClick={() => setActiveTab('notifications')}
                >
                  <Bell size={18} />
                  Notifications
                </a>
              </li>
              <li>
                <a 
                  className={activeTab === 'privacy' ? 'active' : ''}
                  onClick={() => setActiveTab('privacy')}
                >
                  <Shield size={18} />
                  Privacy & Security
                </a>
              </li>
              <li>
                <a 
                  className={activeTab === 'appearance' ? 'active' : ''}
                  onClick={() => setActiveTab('appearance')}
                >
                  {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                  Appearance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-base-100 rounded-box p-6 shadow-lg">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
                
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="flex-1">
                    <form className="space-y-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="john@example.com" className="input input-bordered w-full" />
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Bio</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Tell us about yourself"></textarea>
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder="City, Country" className="input input-bordered w-full" />
                      </div>
                      
                      <button className="btn btn-primary">Save Changes</button>
                    </form>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="avatar mb-4">
                      <div className="w-32 rounded-full">
                        <img src="https://i.pravatar.cc/128" alt="Profile" />
                      </div>
                    </div>
                    <button className="btn btn-outline btn-sm mb-2">Change Photo</button>
                    <button className="btn btn-ghost btn-sm text-error">Remove</button>
                  </div>
                </div>
                
                <div className="divider"></div>
                
                <h3 className="text-lg font-bold mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Change Password</span>
                    </label>
                    <input type="password" placeholder="Current Password" className="input input-bordered w-full mb-2" />
                    <input type="password" placeholder="New Password" className="input input-bordered w-full mb-2" />
                    <input type="password" placeholder="Confirm New Password" className="input input-bordered w-full" />
                  </div>
                  
                  <button className="btn btn-primary">Update Password</button>
                </div>
              </div>
            )}
            
            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                          <span className="label-text">Course updates and announcements</span>
                        </label>
                      </div>
                      
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                          <span className="label-text">New course recommendations</span>
                        </label>
                      </div>
                      
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                          <span className="label-text">Learning reminders</span>
                        </label>
                      </div>
                      
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" />
                          <span className="label-text">Marketing and promotional emails</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div>
                    <h3 className="font-bold mb-4">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                          <span className="label-text">Course completion</span>
                        </label>
                      </div>
                      
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                          <span className="label-text">New messages</span>
                        </label>
                      </div>
                      
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                          <span className="label-text">Assignment deadlines</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div>
                    <h3 className="font-bold mb-4">Notification Frequency</h3>
                    <div className="form-control w-full max-w-xs">
                      <select className="select select-bordered">
                        <option>Immediately</option>
                        <option>Daily digest</option>
                        <option>Weekly digest</option>
                      </select>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary">Save Preferences</button>
                </div>
              </div>
            )}
            
            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Privacy & Security</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-4">Privacy Settings</h3>
                    <div className="space-y-3">
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                          <span className="label-text">Show my profile to other students</span>
                        </label>
                      </div>
                      
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                          <span className="label-text">Show my course progress</span>
                        </label>
                      </div>
                      
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" />
                          <span className="label-text">Allow data collection for personalized recommendations</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div>
                    <h3 className="font-bold mb-4">Security</h3>
                    <div className="space-y-4">
                      <div className="form-control">
                        <label className="label cursor-pointer justify-start gap-4">
                          <input type="checkbox" className="toggle toggle-primary" />
                          <span className="label-text">Enable two-factor authentication</span>
                        </label>
                      </div>
                      
                      <div className="alert alert-info">
                        <span>Two-factor authentication adds an extra layer of security to your account.</span>
                      </div>
                      
                      <button className="btn btn-outline">Set Up Two-Factor Authentication</button>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div>
                    <h3 className="font-bold mb-4">Sessions</h3>
                    <div className="overflow-x-auto">
                      <table className="table w-full">
                        <thead>
                          <tr>
                            <th>Device</th>
                            <th>Location</th>
                            <th>Last Active</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Chrome on Windows</td>
                            <td>New York, USA</td>
                            <td>Now</td>
                            <td><span className="badge badge-success">Current</span></td>
                          </tr>
                          <tr>
                            <td>Safari on iPhone</td>
                            <td>New York, USA</td>
                            <td>2 days ago</td>
                            <td><button className="btn btn-xs btn-error">Logout</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-outline btn-error mt-4">Logout from All Devices</button>
                  </div>
                  
                  <button className="btn btn-primary">Save Settings</button>
                </div>
              </div>
            )}
            
            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Appearance Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-4">Theme</h3>
                    <div className="flex flex-wrap gap-4">
                      <div 
                        className={`card w-36 bg-base-100 shadow-xl cursor-pointer ${theme === 'light' ? 'ring ring-primary' : ''}`}
                        onClick={() => setTheme('light')}
                      >
                        <div className="card-body items-center text-center p-4">
                          <Sun size={24} />
                          <h3 className="card-title text-sm">Light</h3>
                        </div>
                      </div>
                      
                      <div 
                        className={`card w-36 bg-base-100 shadow-xl cursor-pointer ${theme === 'dark' ? 'ring ring-primary' : ''}`}
                        onClick={() => setTheme('dark')}
                      >
                        <div className="card-body items-center text-center p-4">
                          <Moon size={24} />
                          <h3 className="card-title text-sm">Dark</h3>
                        </div>
                      </div>
                      
                      <div 
                        className={`card w-36 bg-base-100 shadow-xl cursor-pointer ${theme === 'system' ? 'ring ring-primary' : ''}`}
                        onClick={() => setTheme('system')}
                      >
                        <div className="card-body items-center text-center p-4">
                          <div className="flex">
                            <Sun size={20} className="mr-1" />
                            <Moon size={20} />
                          </div>
                          <h3 className="card-title text-sm">System</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div>
                    <h3 className="font-bold mb-4">Text Size</h3>
                    <div className="form-control w-full max-w-xs">
                      <input type="range" min="0" max="100" className="range range-primary" step="25" />
                      <div className="w-full flex justify-between text-xs px-2">
                        <span>Small</span>
                        <span>Medium</span>
                        <span>Large</span>
                        <span>X-Large</span>
                        <span>XX-Large</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div>
                    <h3 className="font-bold mb-4">Accent Color</h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary cursor-pointer ring ring-primary ring-offset-2"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-accent cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-info cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-success cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-warning cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-error cursor-pointer"></div>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary">Save Preferences</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
