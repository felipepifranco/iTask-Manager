class tarefa{
	nome : string;
	descricao : string;
	dataCriacao : Date;
	dataLimite : Date;
	concluida : boolean;

	constructor(nome_ :string, dataLimite_:Date,  descricao_? : string){
		this.nome = nome_;
		if(descricao_ == undefined){
			this.descricao = "";
		} else{
			this.descricao = descricao_;
		}
		this.dataCriacao = new Date;
		this.dataLimite = dataLimite_;
		this.concluida = false;
	}

	alternarEstadoConcluido(){
		if(this.concluida){
			this.concluida = false;
		} else{
			this.concluida = true;
		}
	}

	tratarData(data : Date){
		if (data && !isNaN(data.getTime())) {
			const dataFormatada = data.toLocaleDateString('pt-BR');
		
			const horaFormatada = data.toLocaleTimeString('pt-BR', { 
				hour: '2-digit', 
				minute: '2-digit' 
			});

			return `${dataFormatada} às ${horaFormatada}`;
    	}
    
    	return ""; 
	}

	renderizar() {
		let temDataLimite : boolean;
		if(this.tratarData(this.dataLimite) === "")
			temDataLimite = false
		else
			temDataLimite = true;
		
        const cardTarefa = document.createElement('div');
		cardTarefa.className = 'card-tarefa';
        cardTarefa.innerHTML = `
            <input type="checkbox" class="tarefa-checkbox">
			<div class="tarefa-conteudo">
				<div class="tarefa-titulo">
						<h3>${this.nome}</h3>
						<span class="info">Criado em: ${this.tratarData(this.dataCriacao)}</span>
				</div>
				<p class="task-description">${this.descricao}</p>
				${temDataLimite ? `
					<div class="task-footer">
							<span>Data Limite: ${this.tratarData(this.dataLimite)}</span>
					</div>
				` : ''}
			</div>
			<i class="fa-solid fa-trash-can"></i>
            `;
        return cardTarefa;
    }
}

class criadorTarefa{
    inputNome: HTMLInputElement;
	inputDescricao: HTMLTextAreaElement;
    botaoAdicionar: HTMLButtonElement;
	dataLimite: HTMLInputElement;

    constructor() {
        this.inputNome = document.getElementById('input-nome') as HTMLInputElement;
		this.inputDescricao = document.getElementById('input-descricao') as HTMLTextAreaElement;
		this.dataLimite = document.getElementById('input-data') as HTMLInputElement;
        this.botaoAdicionar = document.getElementById('adiciona-tarefa') as HTMLButtonElement;

        this.configurarEventos();
    }

	limparInputs(){
		this.inputNome.value = "";
		this.inputDescricao.value = "";
		this.dataLimite.value = "";
	}


    configurarEventos() {
        // Ouve o clique do botão
        this.botaoAdicionar.addEventListener('click', () => {
				if (!this.inputNome.value.trim()) {
					alert("Erro! Insira um nome para a tarefa");
					return;
				}
				const novaTarefa = new tarefa(this.inputNome.value, new Date(this.dataLimite.value), this.inputDescricao.value);
				document.getElementById('lista-tarefas')?.appendChild(novaTarefa.renderizar());
				this.limparInputs();
			});
    }
}
new criadorTarefa();