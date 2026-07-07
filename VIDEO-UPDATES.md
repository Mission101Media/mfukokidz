# Updating Mfuko Kidz Videos

## Main Home Header Background

The big top header video lives in `index.html`.

### Use a local file for the main header

1. Put the video file inside `assets/videos/`.
2. Rename it to something clear, then update this source in `index.html`:

```html
<source src="assets/videos/pool-games-preview.mp4" type="video/mp4">
```

The header video is set to autoplay, muted, loop, and playsinline so it works cleanly on desktop and phones.

### Use a YouTube video for the main header

In `index.html`, find the commented iframe inside `hero-video-bg`.

Replace both `VIDEO_ID` spots with the real YouTube ID, then remove the comment marks around the iframe.

```html
<iframe
  src="https://www.youtube.com/embed/abc123XYZ?autoplay=1&mute=1&loop=1&playlist=abc123XYZ&controls=0&playsinline=1"
  title="Mfuko Kidz header video"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowfullscreen>
</iframe>
```

## Home Page Slideshow Backgrounds

The slideshow lives in `index.html`.

### Use a local video file

1. Put the video file inside `assets/videos/`.
2. Use an `.mp4` file for best browser support.
3. Update the slide video source:

```html
<video class="slide-video" autoplay muted loop playsinline poster="assets/pool-games-logo.png">
  <source src="assets/videos/your-video-file.mp4" type="video/mp4">
</video>
```

Local background videos should stay muted because browsers usually block autoplay with sound.

### Use a YouTube video as the background

Replace `VIDEO_ID` with the ID from the YouTube URL.

Example YouTube link:

```text
https://www.youtube.com/watch?v=abc123XYZ
```

The video ID is:

```text
abc123XYZ
```

Use it in the embed URL:

```html
<iframe
  src="https://www.youtube.com/embed/abc123XYZ?autoplay=1&mute=1&loop=1&playlist=abc123XYZ&controls=0&playsinline=1"
  title="Mfuko Kidz YouTube video preview"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowfullscreen>
</iframe>
```

## Videos Page Links

The video cards live in `videos.html`.

Find links that look like this:

```html
href="https://www.youtube.com/watch?v=VIDEO_ID"
```

Replace `VIDEO_ID` with the real YouTube video ID, or paste the full YouTube watch link.

Example:

```html
href="https://www.youtube.com/watch?v=abc123XYZ"
```

## Optional Embedded Video Cards

If you want a video to play directly on the Videos page instead of opening YouTube, replace the thumbnail block with this:

```html
<div class="video-thumb with-embed">
  <iframe
    src="https://www.youtube.com/embed/abc123XYZ"
    title="Mfuko Kidz video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```
