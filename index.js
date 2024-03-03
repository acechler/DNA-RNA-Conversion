// Simple node project to show DNA and RNA conversion.

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let rna = [];
    for(let i = 0; i < dna.length; i++){
      if(dna.charAt(i) === 'T'){
        rna.push('U');
      } else if (dna.charAt(i) === 'U'){
        rna.push('T');
      } else{
      rna.push(dna.charAt(i));
      }
          
     }
    return rna.join('');
  }


  console.log(DNAtoRNA("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC"));