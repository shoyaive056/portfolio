import { useState } from 'react';
import { profile } from '../data/profile.js';

// Picks up src/assets/profile.jpg|jpeg|png|webp if it exists. Because it uses
// import.meta.glob, the build still succeeds when no photo has been added yet.
const found = import.meta.glob('../assets/profile.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const photoUrl = Object.values(found)[0];

export default function ProfileImage() {
  const [failed, setFailed] = useState(false);
  const showPhoto = photoUrl && !failed;

  return (
    <figure className="portrait">
      <span className="portrait__wash portrait__wash--one" aria-hidden="true" />
      <span className="portrait__wash portrait__wash--two" aria-hidden="true" />
      <span className="portrait__outline" aria-hidden="true" />
      <div className="portrait__frame">
        {showPhoto ? (
          <img
            src={photoUrl}
            alt={profile.photoAlt}
            width="480"
            height="600"
            decoding="async"
            fetchpriority="high"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="portrait__fallback" role="img" aria-label="Profile photo placeholder">
            <span>{profile.monogram}</span>
            {import.meta.env.DEV && <small>Add src/assets/profile.jpg</small>}
          </div>
        )}
      </div>
    </figure>
  );
}
