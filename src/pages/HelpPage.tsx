import React from 'react';
import { HelpCircle, Search, MessageCircle, FileText, ExternalLink } from 'lucide-react';

const HelpPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle size={24} className="text-primary" />
        <h1 className="text-2xl font-bold">Help Center</h1>
      </div>
      
      {/* Search Bar */}
      <div className="bg-base-100 rounded-box p-6 shadow-lg mb-8">
        <div className="form-control">
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Search for help topics..." 
              className="input input-bordered w-full" 
            />
            <button className="btn btn-primary">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileText size={24} className="text-primary" />
              </div>
              <h2 className="card-title">Documentation</h2>
            </div>
            <p className="text-base-content/70">
              Browse our comprehensive guides and tutorials
            </p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary btn-sm">View Docs</button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-secondary/10 p-3 rounded-full">
                <MessageCircle size={24} className="text-secondary" />
              </div>
              <h2 className="card-title">Contact Support</h2>
            </div>
            <p className="text-base-content/70">
              Get in touch with our support team
            </p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-secondary btn-sm">Contact Us</button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-accent/10 p-3 rounded-full">
                <ExternalLink size={24} className="text-accent" />
              </div>
              <h2 className="card-title">Community</h2>
            </div>
            <p className="text-base-content/70">
              Join our community forum for discussions
            </p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-accent btn-sm">Visit Forum</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="bg-base-100 rounded-box p-6 shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq-accordion" /> 
            <div className="collapse-title font-medium">
              How do I reset my password?
            </div>
            <div className="collapse-content">
              <p>To reset your password, click on the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password.</p>
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq-accordion" /> 
            <div className="collapse-title font-medium">
              How do I download course materials?
            </div>
            <div className="collapse-content">
              <p>Course materials can be downloaded from the Resources tab on each course page. Look for the download button next to each resource.</p>
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq-accordion" /> 
            <div className="collapse-title font-medium">
              Can I access courses on mobile devices?
            </div>
            <div className="collapse-content">
              <p>Yes, our platform is fully responsive and works on all mobile devices. You can access your courses through any modern web browser.</p>
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq-accordion" /> 
            <div className="collapse-title font-medium">
              How do I track my progress?
            </div>
            <div className="collapse-content">
              <p>Your progress is automatically tracked as you complete lessons. You can view your overall progress on the course detail page or in the Progress tab.</p>
            </div>
          </div>
          
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="faq-accordion" /> 
            <div className="collapse-title font-medium">
              How do I get a certificate?
            </div>
            <div className="collapse-content">
              <p>Certificates are issued automatically upon completion of all course modules. You can download your certificates from your profile page.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="bg-base-100 rounded-box p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Still Need Help?</h2>
        
        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" placeholder="Enter your name" className="input input-bordered w-full" />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>Select a topic</option>
              <option>Technical Issue</option>
              <option>Billing Question</option>
              <option>Course Content</option>
              <option>Account Access</option>
              <option>Other</option>
            </select>
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea className="textarea textarea-bordered h-32" placeholder="Describe your issue in detail"></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default HelpPage;
