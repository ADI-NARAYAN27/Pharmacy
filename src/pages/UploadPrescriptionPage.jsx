import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import FileDropzone from '../components/FileDropzone';
import SectionHeader from '../components/SectionHeader';
import { uploadPrescription } from '../services/api';

function UploadPrescriptionPage() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!file || !file.type.startsWith('image/')) {
      setPreviewUrl('');
      return undefined;
    }

    const nextPreviewUrl = URL.createObjectURL(file);
    setPreviewUrl(nextPreviewUrl);

    return () => URL.revokeObjectURL(nextPreviewUrl);
  }, [file]);

  const handleSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error('Choose a prescription file first');
      return;
    }

    setSubmitting(true);
    const response = await uploadPrescription(file);
    setSubmitting(false);
    toast.success(`${response.fileName} submitted successfully`);
  };

  return (
    <div className="container-shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
        <section className="glass-panel p-6 sm:p-8">
          <SectionHeader
            description="This page is wired to a placeholder Axios service. Replace the mock branch once your backend upload endpoint is ready."
            eyebrow="Prescription upload"
            title="Securely submit your prescription"
          />

          <FileDropzone
            file={file}
            isDragging={isDragging}
            onDragLeave={() => setIsDragging(false)}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDrop={handleDrop}
            onSelect={handleSelect}
            previewUrl={previewUrl}
          />

          <button
            className="button-primary mt-6 w-full sm:w-auto"
            disabled={submitting}
            onClick={handleSubmit}
            type="button"
          >
            {submitting ? 'Submitting...' : 'Submit Prescription'}
          </button>
        </section>

        <aside className="glass-panel p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">Process notes</p>
          <div className="mt-6 space-y-4">
            {[
              'Upload images or PDFs with visible doctor details and issue date.',
              'Prescription validation is shown as a frontend notice only in this demo.',
              'The actual file submission logic is isolated in src/services/api.js.',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default UploadPrescriptionPage;
