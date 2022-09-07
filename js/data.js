function candidateID(num) {
    return num - 1;
}

function candidateNum(id) {
    return id + 1;
}

var AppData = {};

//
// Kandidat ketua & wakil ketua:
//

AppData.candidates = [];

AppData.candidates[candidateID(3)] = {
    chairman: 'Oka Farel Evansyah',
    viceChairman: 'Nichi Sidiq Arianto'
};

AppData.candidates[candidateID(1)] = {
    chairman: 'Jiehan Farel Waksito Ajie',
    viceChairman: 'Lutfhfian Ibnu Afan'
};

AppData.candidates[candidateID(2)] = {
    chairman: 'M. Diaz Tegar',
    viceChairman: 'Oliviero Dylan Danuarta'
};

//
// Jenis timer:
//

AppData.actions = {
    visionAndMission: {
        session: 'Orasi',
        description: 'Penyampaian Visi & Misi',
        duration: 5 * 60
    },
    answeringMotion: {
        session: 'Debat',
        description: 'Jawaban Terhadap Mosi',
        duration: 3 * 60
    },
    motionConclusion: {
        session: 'Debat',
        description: 'Kesimpulan',
        duration: 60
    },
    studentQuestion: {
        session: 'Tanya Jawab',
        description: 'Menjawab Pertanyaan Siswa',
        duration: 2 * 60
    }
};

AppData.actions.default = 'visionAndMission';
