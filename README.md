# projeto-integrador
Repositório criado para armazenar os códigos do Projeto Integrador do curso Programador Web do Senac Jessé Freire
* Rotas da API
    - http:localhost:3000/api/paciente
        * post - (/paciente) (nome, telefone, cpf, endereco, rg, ficha_anamnese) todos obrigatorios
        * get - (/paciente)
        * get - (/paciente/:pacienteID) ex: http:localhost:3000/api/paciente/1
        * put - (/paciente/:pacienteID) ex: http:localhost:3000/api/paciente/1
        * delete - (/paciente/:pacienteID) ex: http:localhost:3000/api/paciente/1

    - http:localhost:3000/api/consulta
        * post - (/consulta) (cpfID, procedimento) todos obrigatorios
        * get - (/consulta)
        * get - (/consulta/:consultaID) ex: http:localhost:3000/api/consulta/1
        * put - (/consulta/:consultaID) ex: http:localhost:3000/api/consulta/1
        * delete - (/consulta/:consultaID) ex: http:localhost:3000/api/consulta/1

    - http:localhost:3000/api/fornecedor
        * post - (/fornecedor) (razao_social, cnpj, telefone, endereco) todos obrigatorios
        * get - (/fornecedor)
        * get - (/fornecedor/:fornecedorID) ex: http:localhost:3000/api/fornecedor/1
        * put - (/fornecedor/:fornecedorID) ex: http:localhost:3000/api/fornecedor/1
        * delete - (/fornecedor/:fornecedorID) ex: http:localhost:3000/api/fornecedor/1

    - http:localhost:3000/api/prestadorServico
        * post - (/prestadorServico) (nome, cpf, rg, cro, razao_social, cnpj, telefone, endereco) todos obrigatorios
        * get - (/prestadorServico)
        * get - (/prestadorServico/:prestadorServicoID) ex: http:localhost:3000/api/prestadorServico/1
        * put - (/prestadorServico/:prestadorServicoID) ex: http:localhost:3000/api/prestadorServico/1
        * delete - (/prestadorServico/:prestadorServicoID) ex: http:localhost:3000/api/prestadorServico/1

    - http:localhost:3000/api/funcionario
        * post - (/funcionario) (nome, telefone, cpf, endereco, rg) todos obrigatorios
        * get - (/funcionario)
        * get - (/funcionario/:funcionarioID) ex: http:localhost:3000/api/funcionario/1
        * put - (/funcionario/:funcionarioID) ex: http:localhost:3000/api/funcionario/1
        * delete - (/funcionario/:funcionarioID) ex: http:localhost:3000/api/funcionario/1