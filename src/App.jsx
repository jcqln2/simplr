import React, { useState } from 'react';
import { Sparkles, Link as LinkIcon, FileText, Lightbulb, Loader2 } from 'lucide-react';

const Simplr = () => {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('simple');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState('text');

  const modes = [
    { id: 'simple', name: 'Short & Simple', desc: 'Quick, easy explanation' },
    { id: 'detailed', name: 'Detailed', desc: 'Thorough but clear' },
    { id: 'eli5', name: 'ELI5', desc: 'Explain like I\'m 5' }
  ];

  const handleSimplify = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    
    // Simulate AI processing with a realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate a demo response based on mode
    let demoResponse = '';
    const isUrl = input.startsWith('http://') || input.startsWith('https://');
    
    if (mode === 'simple') {
      demoResponse = `Here's a simplified explanation:\n\n${isUrl ? 'This webpage discusses' : 'This topic is about'} the key concepts in a straightforward way. The main idea is that complex topics can be broken down into digestible pieces. Think of it as taking a big puzzle and focusing on one piece at a time.\n\nThe important takeaway: understanding comes from breaking things down into smaller, manageable parts.`;
    } else if (mode === 'detailed') {
      demoResponse = `Let me break this down in detail:\n\n**Overview**\n${isUrl ? 'The linked content covers' : 'This concept involves'} several interconnected ideas that build upon each other. First, we need to understand the foundation - the basic principles that everything else relies on.\n\n**Key Points**\n1. The fundamental concept acts as the building block\n2. Secondary elements add complexity but follow logical patterns\n3. Real-world applications make the abstract concrete\n\n**Practical Understanding**\nImagine you're building with blocks. Each piece has a purpose, and when arranged correctly, they create something meaningful. That's exactly how this works - structured, purposeful, and ultimately comprehensible.`;
    } else {
      demoResponse = `Okay, imagine you have a really big toy box full of different toys. Right now, it looks super messy and confusing, right?\n\nWell, ${isUrl ? 'this website' : 'this thing'} is like having someone help you sort those toys into groups - all the cars together, all the dolls together, all the blocks together.\n\nOnce everything is in its group, it's SO much easier to find what you want and understand what you have!\n\nThat's what we're doing here - taking something big and confusing and putting it into groups that make sense. Cool, right? 🎨`;
    }
    
    setResult(demoResponse);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-violet-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Simplr
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Takes anything confusing and explains it in plain, simple language
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Input Type Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setInputType('text')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                inputType === 'text'
                  ? 'bg-violet-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              Text
            </button>
            <button
              onClick={() => setInputType('url')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                inputType === 'url'
                  ? 'bg-violet-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LinkIcon className="w-4 h-4" />
              URL
            </button>
          </div>

          {/* Input Area */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={inputType === 'url' ? 'Paste a URL here...' : 'Paste text or describe a concept here...'}
              className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:border-violet-400 focus:outline-none resize-none text-gray-700"
            />

            {/* Mode Selection */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How should we explain it?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {modes.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      mode === m.id
                        ? 'border-violet-500 bg-violet-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">{m.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{m.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Simplify Button */}
            <button
              onClick={handleSimplify}
              disabled={loading || !input.trim()}
              className="w-full mt-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Simplifying...
                </>
              ) : (
                <>
                  <Lightbulb className="w-5 h-5" />
                  Make it Simplr
                </>
              )}
            </button>
          </div>

          {/* Result Area */}
          {result && (
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-fadeIn">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-violet-600" />
                <h2 className="text-xl font-semibold text-gray-800">Simplified Explanation</h2>
              </div>
              <div className="prose prose-violet max-w-none">
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {result}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <LinkIcon className="w-6 h-6 text-violet-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Any Source</h3>
            <p className="text-gray-600 text-sm">Paste links or text from anywhere</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Smart AI</h3>
            <p className="text-gray-600 text-sm">Powered by advanced understanding</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Your Style</h3>
            <p className="text-gray-600 text-sm">Choose how you learn best</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Simplr;