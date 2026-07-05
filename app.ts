class Utils{
	// converte um dado do tipo Date para uma string formatada do modo que será usado no projeto
	converteData(data: Date){

	}
}


class tarefa{
	nome : string;
	descricao : string;
	tipo : string;
	dataCriacao : Date;
	dataLimite : Date;
	concluida : boolean;

	constructor(nome_ :string, dataCriacao_:Date, dataLimite_:Date,  descricao_? : string, tipo_? : string){
		this.nome = nome_;
		if(descricao_ == undefined){
			this.descricao = "";
		} else{
			this.descricao = descricao_;
		}
		if(tipo_ == undefined){
			this.tipo = "Nenhum";
		} else{
			this.tipo = tipo_;
		}
		this.dataCriacao = dataCriacao_;
		this.dataLimite = dataLimite_;
		this.concluida = false;
	}

	mudarDataLimite(novaData : Date){
		this.dataLimite = novaData;
	}

	mudarNome(novoNome: string){
		//TODO: adicionar tratamento para nome vazio
		this.nome = novoNome;
	}

	mudarDescricao(novaDescricao: string){
		this.descricao = novaDescricao;
	}

	alternarEstadoConcluido(){
		if(this.concluida){
			this.concluida = false;
		} else{
			this.concluida = true;
		}
	}
}
