import React, { useState, useEffect } from 'react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  created_at: string;
  is_processed: boolean;
  notes?: string;
  airtable_record_id?: string;
}

interface QuizSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  care_type?: string;
  budget?: string;
  timeline?: string;
  urgency?: string;
  questions: Array<{ question: string; answer: string }>;
  source?: string;
  created_at: string;
  is_processed: boolean;
  notes?: string;
  airtable_record_id?: string;
}

export function AdminDashboard() {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [quizSubmissions, setQuizSubmissions] = useState<QuizSubmission[]>([]);
  const [activeTab, setActiveTab] = useState<'contact' | 'quiz'>('contact');
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<QuizSubmission | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      
      const [contactRes, quizRes] = await Promise.all([
        fetch('http://localhost:3001/api/submissions/contact'),
        fetch('http://localhost:3001/api/submissions/quiz')
      ]);

      const contactData = await contactRes.json();
      const quizData = await quizRes.json();

      if (contactData.success) setContactSubmissions(contactData.data);
      if (quizData.success) setQuizSubmissions(quizData.data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const updateSubmissionStatus = async (type: 'contact' | 'quiz', id: string, isProcessed: boolean, notes?: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/submissions/${type}/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isProcessed, notes })
      });

      if (response.ok) {
        fetchSubmissions(); // Refresh data
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">View and manage contact and quiz submissions</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contact'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Contact Forms ({contactSubmissions.length})
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'quiz'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Quiz Submissions ({quizSubmissions.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {activeTab === 'contact' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Contact Form Submissions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contactSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{submission.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.phone || '-'}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{submission.message}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.source || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(submission.created_at)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          submission.is_processed 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {submission.is_processed ? 'Processed' : 'New'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => updateSubmissionStatus('contact', submission.id, !submission.is_processed)}
                          className="text-primary hover:text-primary-dark"
                        >
                          {submission.is_processed ? 'Mark New' : 'Mark Processed'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quiz Submissions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Care Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {quizSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{submission.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.location || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.care_type || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.budget || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.timeline || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(submission.created_at)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          submission.is_processed 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {submission.is_processed ? 'Processed' : 'New'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="text-primary hover:text-primary-dark"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => updateSubmissionStatus('quiz', submission.id, !submission.is_processed)}
                            className="text-primary hover:text-primary-dark"
                          >
                            {submission.is_processed ? 'Mark New' : 'Mark Processed'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Quiz Details Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Quiz Submission Details</h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Contact Information</h4>
                  <p><strong>Name:</strong> {selectedSubmission.name}</p>
                  <p><strong>Email:</strong> {selectedSubmission.email}</p>
                  <p><strong>Phone:</strong> {selectedSubmission.phone || 'Not provided'}</p>
                  <p><strong>Location:</strong> {selectedSubmission.location || 'Not provided'}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Summary</h4>
                  <p><strong>Care Type:</strong> {selectedSubmission.care_type || 'Not specified'}</p>
                  <p><strong>Budget:</strong> {selectedSubmission.budget || 'Not specified'}</p>
                  <p><strong>Timeline:</strong> {selectedSubmission.timeline || 'Not specified'}</p>
                  <p><strong>Urgency:</strong> {selectedSubmission.urgency || 'Not specified'}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Questions and Answers</h4>
                  <div className="space-y-2">
                    {selectedSubmission.questions.map((q, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <p className="font-medium text-gray-900">{q.question}</p>
                        <p className="text-gray-600">{q.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Submission Details</h4>
                  <p><strong>Source:</strong> {selectedSubmission.source || 'Unknown'}</p>
                  <p><strong>Date:</strong> {formatDate(selectedSubmission.created_at)}</p>
                  <p><strong>Status:</strong> {selectedSubmission.is_processed ? 'Processed' : 'New'}</p>
                  {selectedSubmission.airtable_record_id && (
                    <p><strong>Airtable Record ID:</strong> {selectedSubmission.airtable_record_id}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 