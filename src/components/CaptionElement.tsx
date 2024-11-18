import React, { useState, useEffect } from 'react';
import { parse } from '@plussub/srt-vtt-parser';
import { Entry } from '@plussub/srt-vtt-parser/dist/types';
import axios from 'axios';
import ReactPlayer from "react-player";
import EditableField from './EditableField';

const CaptionElement: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  const [fileContent, setFileContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('')
          .then(response => {
            setFileContent(response.data);
            setEntries(parseSrt(response.data));
          })
          .catch(error => {
            setError(error);
          });
      } catch (error) {
        setError('Ambiguous error fetching or reading file');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!fileContent) {
    return <div>Loading...</div>;
  }

  function parseSrt(srtContent: string): Entry[] {
    const { entries } = parse(srtContent)
    return entries;
  }

  return (
        <div style={{ display: 'flex' }}>
        <div style={{ overflowY: 'scroll', height: '400px', flex: 1 }}>
            {entries.map((entry) => (
            <div key={entry.id} style={{ backgroundColor: 'grey', borderRadius: '15px' }}>
                <p>
                <strong>Start:</strong> {entry.from} - <strong>End:</strong> {entry.to}
                <br />
                <EditableField
                    initialValue={entry.text}
                    onSave={(newValue) => {
                    console.log("Do nothing but log the new value:", newValue);
                    }}
                />
                </p>
            </div>
            ))}
        </div>
        <div style={{ width: '300px' }}>
            <ReactPlayer url='' controls= {true} />
        </div>
        </div>
  );
};

export default CaptionElement
