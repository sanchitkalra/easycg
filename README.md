# EasyCG

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Data Structure

Data about grades is scored in a `grades` object structured as follows

```
var grades = {
    "Subject Name" : {
        grade: , // One of the 10 possible grades stored as a string
        weight: // weight of a particular subject towards the semester as a number
    }
}
```