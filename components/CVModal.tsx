import React from 'react';
import { X, ExternalLink, Download, FileText } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/CV/Vaibhav_KUMAR_CV.pdf";
  
  // Appending ?download to the Supabase URL forces the server to send the correct 
  // Content-Disposition headers, which fixes the cross-origin download error.
  const downloadUrl = `${pdfUrl}?download=`;
  
  // Using Google Docs Viewer proxy to bypass iframe embedding restrictions
  const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">Curriculum Vitae</h3>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mt-0.5">Vaibhav_KUMAR_CV.pdf</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-zinc-900 overflow-hidden relative">
          <iframe
            src={viewerUrl}
            className="w-full h-full border-none"
            title="CV Preview"
            loading="lazy"
          ></iframe>
          
          {/* Subtle loading indicator behind the iframe */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
             <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-orange-500"></div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 border-t border-zinc-800 bg-zinc-900/50 flex flex-col sm:flex-row items-center justify-end gap-4">
          <a 
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 text-white font-semibold rounded-xl hover:bg-zinc-700 transition-all border border-zinc-700"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Full Screen</span>
          </a>
          <a 
            href={downloadUrl}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-500 transition-all shadow-[0_4px_20px_rgba(234,88,12,0.2)]"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVModal;