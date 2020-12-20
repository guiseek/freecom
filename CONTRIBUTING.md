# Contribuindo com a Livre Comunicação

Adoraríamos que você contribuísse com o projeto e ajudasse a torná-la ainda melhor do que é hoje! Como contribuidor, aqui estão as diretrizes que gostaríamos que você seguisse:

- [Código de Conduta](#coc)
- [Como posso contribuir](#how-to)
- [Dúvidas ou problemas?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)

## <a name="coc"></a> Código de Conduta

Ajude-nos a manter a comunidade Freecom aberta e inclusiva. Por favor, leia e siga nosso [Código de Conduta](CODE_OF_CONDUCT.md).

## <a name="how-to"></a> Algumas opções sobre como você pode contribuir

- [Codificando](#code)
- [Desenhando](#design)
- [Divulgando](#adversiting)
- [Organizando um evento](#events)
- [Propondo uma oficina](#workshops)
- [Fazendo um treinamento](#trainings)

## <a name="question"></a> Tem alguma dúvida ou problema?

Não abra issues para questões gerais de suporte relacionadas a tecnologia WebRTC, pois queremos manter as issues do GitHub para relatórios de bugs. Em vez disso você pode [iniciar uma discussão](https://github.com/guiseek/freecom/discussions/new) com a comunidade freecom. Caso não funcione, recomendamos o uso do [Stack Overflow](https://stackoverflow.com/questions/tagged/freecom) para fazer perguntas relacionadas ao suporte. Ao criar uma nova pergunta no Stack Overflow, certifique-se de adicionar a `freecom` tag.

Stack Overflow é um lugar muito melhor para fazer perguntas, pois:

- existem milhares de pessoas dispostas a ajudar no Stack Overflow
- perguntas e respostas ficam disponíveis para visualização pública, então sua pergunta / resposta pode ajudar alguém
- O sistema de votação do Stack Overflow garante que as melhores respostas fiquem claramente visíveis.

Para economizar o seu e o nosso tempo, fecharemos sistematicamente todos as issues que são solicitações de suporte geral e redirecionaremos as pessoas para que abram uma discussão ou para o Stack Overflow.

Se você quiser conversar sobre a questão em tempo real, entre em contato por meio de [nosso servidor Discord][discord].

## <a name="issue"></a> Encontrou um Bug?

Se você encontrar um bug no código-fonte, pode nos ajudar [abrindo uma issue](https://github.com/guiseek/freecom/discussions/new) em nosso [repositório Github][github].
Melhor ainda, você pode [enviar um Pull Request](#submit-pr) com uma correção.

## <a name="feature"></a> Sente falta de algum recurso?

Você pode _solicitar_ um novo recurso [iniciar uma discussão](https://github.com/guiseek/freecom/discussions/new) para nosso Repositório GitHub.
Se você gostaria de _implementar_ um novo recurso, considere o tamanho da alteração para determinar as etapas corretas para prosseguir:

- Para um **Novo Recurso**, primeiro inicie uma discussão e esboce sua proposta para que possa ser avaliada.
  Esse processo nos permite coordenar melhor nossos esforços, evitar a duplicação de trabalho e ajudá-lo a elaborar a mudança para que seja aceita com sucesso no projeto.

  **Nota**: Adicionar um novo tópico à documentação, ou reescrever significativamente um tópico, conta como um novo recurso.

- **Pequenos recursos** podem ser criados e diretamente [enviados como um pull request](#submit-pr).

## <a name="submit-pr"></a>

> # Em desenvolvimento
>
> Em breve teremos mais informações sobre como contribuir, legal?
>
> -- Guilherme Visi

---

## Nossa stack

| Angular                                                                       | NestJS                                                                    | TS                                                                          | JavaScript                                                                  | HTML5                                                                    | CSS3                                       |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------ |
| ![Angular](apps/docs/samples/peer-client/src/assets/images/logos/angular.svg) | ![NestJS](apps/docs/samples/peer-client/src/assets/images/logos/nest.svg) | ![TypeScript](apps/docs/samples/peer-client/src/assets/images/logos/ts.svg) | ![JavaScript](apps/docs/samples/peer-client/src/assets/images/logos/js.svg) | ![HTML5](apps/docs/samples/peer-client/src/assets/images/logos/html.svg) | ![HTML5](docs/assets/images/logos/css.svg) |

---

# Links úteis

## w3c WebRTC

1.  [Introduction](https://www.w3.org/TR/webrtc/#intro)
2.  [2.Conformance](https://www.w3.org/TR/webrtc/#conformance)
3.  [3.Terminology](https://www.w3.org/TR/webrtc/#terminology)
4.  [4.Peer-to-peer connections](https://www.w3.org/TR/webrtc/#peer-to-peer-connections)
    1.  [4.1Introduction](https://www.w3.org/TR/webrtc/#introduction)
    2.  [4.2Configuration](https://www.w3.org/TR/webrtc/#configuration)
        1.  [4.2.1`RTCConfiguration` Dictionary](https://www.w3.org/TR/webrtc/#rtcconfiguration-dictionary)
        2.  [4.2.2`RTCIceCredentialType` Enum](https://www.w3.org/TR/webrtc/#rtcicecredentialtype-enum)
        3.  [4.2.3`RTCIceServer` Dictionary](https://www.w3.org/TR/webrtc/#rtciceserver-dictionary)
        4.  [4.2.4`RTCIceTransportPolicy` Enum](https://www.w3.org/TR/webrtc/#rtcicetransportpolicy-enum)
        5.  [4.2.5`RTCBundlePolicy` Enum](https://www.w3.org/TR/webrtc/#rtcbundlepolicy-enum)
        6.  [4.2.6`RTCRtcpMuxPolicy` Enum](https://www.w3.org/TR/webrtc/#rtcrtcpmuxpolicy-enum)
        7.  [4.2.7Offer/Answer Options](https://www.w3.org/TR/webrtc/#offer-answer-options)
    3.  [4.3State Definitions](https://www.w3.org/TR/webrtc/#state-definitions)
        1.  [4.3.1`RTCSignalingState` Enum](https://www.w3.org/TR/webrtc/#rtcsignalingstate-enum)
        2.  [4.3.2`RTCIceGatheringState` Enum](https://www.w3.org/TR/webrtc/#rtcicegatheringstate-enum)
        3.  [4.3.3`RTCPeerConnectionState` Enum](https://www.w3.org/TR/webrtc/#rtcpeerconnectionstate-enum)
        4.  [4.3.4`RTCIceConnectionState` Enum](https://www.w3.org/TR/webrtc/#rtciceconnectionstate-enum)
    4.  [4.4RTCPeerConnection Interface](https://www.w3.org/TR/webrtc/#rtcpeerconnection-interface)
        1.  [4.4.1Operation](https://www.w3.org/TR/webrtc/#operation)
            1.  [4.4.1.1Constructor](https://www.w3.org/TR/webrtc/#constructor)
            2.  [4.4.1.2Chain an asynchronous operation](https://www.w3.org/TR/webrtc/#chain-an-asynchronous-operation)
            3.  [4.4.1.3Update the connection state](https://www.w3.org/TR/webrtc/#update-the-connection-state)
            4.  [4.4.1.4Update the ICE gathering state](https://www.w3.org/TR/webrtc/#update-the-ice-gathering-state)
            5.  [4.4.1.5Set the session description](https://www.w3.org/TR/webrtc/#set-the-session-description)
            6.  [4.4.1.6Set the configuration](https://www.w3.org/TR/webrtc/#set-the-configuration)
        2.  [4.4.2Interface Definition](https://www.w3.org/TR/webrtc/#interface-definition)
        3.  [4.4.3Legacy Interface Extensions](https://www.w3.org/TR/webrtc/#legacy-interface-extensions)
            1.  [4.4.3.1Method extensions](https://www.w3.org/TR/webrtc/#method-extensions)
            2.  [4.4.3.2Legacy configuration extensions](https://www.w3.org/TR/webrtc/#legacy-configuration-extensions)
        4.  [4.4.4Garbage collection](https://www.w3.org/TR/webrtc/#garbage-collection)
    5.  [4.5Error Handling](https://www.w3.org/TR/webrtc/#error-handling)
        1.  [4.5.1General Principles](https://www.w3.org/TR/webrtc/#general-principles)
    6.  [4.6Session Description Model](https://www.w3.org/TR/webrtc/#session-description-model)
        1.  [4.6.1`RTCSdpType`](https://www.w3.org/TR/webrtc/#rtcsdptype)
        2.  [4.6.2`RTCSessionDescription` Class](https://www.w3.org/TR/webrtc/#rtcsessiondescription-class)
    7.  [4.7Session Negotiation Model](https://www.w3.org/TR/webrtc/#session-negotiation-model)
        1.  [4.7.1Setting Negotiation-Needed](https://www.w3.org/TR/webrtc/#setting-negotiation-needed)
        2.  [4.7.2Clearing Negotiation-Needed](https://www.w3.org/TR/webrtc/#clearing-negotiation-needed)
        3.  [4.7.3Updating the Negotiation-Needed flag](https://www.w3.org/TR/webrtc/#updating-the-negotiation-needed-flag)
    8.  [4.8Interfaces for Interactive Connectivity Establishment](https://www.w3.org/TR/webrtc/#interfaces-for-interactive-connectivity-establishment)
        1.  [4.8.1`RTCIceCandidate` Interface](https://www.w3.org/TR/webrtc/#rtcicecandidate-interface)
            1.  [4.8.1.1`candidate-attribute` Grammar](https://www.w3.org/TR/webrtc/#candidate-attribute-grammar)
            2.  [4.8.1.2`RTCIceProtocol` Enum](https://www.w3.org/TR/webrtc/#rtciceprotocol-enum)
            3.  [4.8.1.3`RTCIceTcpCandidateType` Enum](https://www.w3.org/TR/webrtc/#rtcicetcpcandidatetype-enum)
            4.  [4.8.1.4`RTCIceCandidateType` Enum](https://www.w3.org/TR/webrtc/#rtcicecandidatetype-enum)
        2.  [4.8.2`RTCPeerConnectionIceEvent`](https://www.w3.org/TR/webrtc/#rtcpeerconnectioniceevent)
        3.  [4.8.3`RTCPeerConnectionIceErrorEvent`](https://www.w3.org/TR/webrtc/#rtcpeerconnectioniceerrorevent)
    9.  [4.9Certificate Management](https://www.w3.org/TR/webrtc/#sec.cert-mgmt)
        1.  [4.9.1`RTCCertificateExpiration` Dictionary](https://www.w3.org/TR/webrtc/#rtccertificateexpiration-dictionary)
        2.  [4.9.2`RTCCertificate` Interface](https://www.w3.org/TR/webrtc/#rtccertificate-interface)
5.  [5.RTP Media API](https://www.w3.org/TR/webrtc/#rtp-media-api)
    1.  [5.1RTCPeerConnection Interface Extensions](https://www.w3.org/TR/webrtc/#rtcpeerconnection-interface-extensions)
        1.  [5.1.1Processing Remote MediaStreamTracks](https://www.w3.org/TR/webrtc/#processing-remote-mediastreamtracks)
    2.  [5.2`RTCRtpSender` Interface](https://www.w3.org/TR/webrtc/#rtcrtpsender-interface)
        1.  [5.2.1`RTCRtpParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpparameters)
        2.  [5.2.2`RTCRtpSendParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcsendrtpparameters)
        3.  [5.2.3`RTCRtpReceiveParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcreceivertpparameters)
        4.  [5.2.4`RTCRtpCodingParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpcodingparameters)
        5.  [5.2.5`RTCRtpDecodingParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpdecodingparameters)
        6.  [5.2.6`RTCRtpEncodingParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpencodingparameters)
        7.  [5.2.7`RTCRtcpParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtcpparameters)
        8.  [5.2.8`RTCRtpHeaderExtensionParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpheaderextensionparameters)
        9.  [5.2.9`RTCRtpCodecParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpcodecparameters)
        10. [5.2.10`RTCRtpCapabilities` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpcapabilities)
        11. [5.2.11`RTCRtpCodecCapability` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpcodeccapability)
        12. [5.2.12`RTCRtpHeaderExtensionCapability` Dictionary](https://www.w3.org/TR/webrtc/#rtcrtpheaderextensioncapability)
    3.  [5.3`RTCRtpReceiver` Interface](https://www.w3.org/TR/webrtc/#rtcrtpreceiver-interface)
    4.  [5.4`RTCRtpTransceiver` Interface](https://www.w3.org/TR/webrtc/#rtcrtptransceiver-interface)
        1.  [5.4.1Simulcast functionality](https://www.w3.org/TR/webrtc/#simulcast-functionality)
            1.  [5.4.1.1Encoding Parameter Examples](https://www.w3.org/TR/webrtc/#rtcrtpencodingspatialsim-example*)
        2.  [5.4.2"Hold" functionality](https://www.w3.org/TR/webrtc/#hold-functionality)
    5.  [5.5`RTCDtlsTransport` Interface](https://www.w3.org/TR/webrtc/#rtcdtlstransport-interface)
        1.  [5.5.1`RTCDtlsFingerprint` Dictionary](https://www.w3.org/TR/webrtc/#rtcdtlsfingerprint)
    6.  [5.6`RTCIceTransport` Interface](https://www.w3.org/TR/webrtc/#rtcicetransport)
        1.  [5.6.1`RTCIceParameters` Dictionary](https://www.w3.org/TR/webrtc/#rtciceparameters)
        2.  [5.6.2`RTCIceCandidatePair` Dictionary](https://www.w3.org/TR/webrtc/#rtcicecandidatepair)
        3.  [5.6.3`RTCIceGathererState` Enum](https://www.w3.org/TR/webrtc/#rtcicegathererstate)
        4.  [5.6.4`RTCIceTransportState` Enum](https://www.w3.org/TR/webrtc/#rtcicetransportstate)
        5.  [5.6.5`RTCIceRole` Enum](https://www.w3.org/TR/webrtc/#rtcicerole)
        6.  [5.6.6`RTCIceComponent` Enum](https://www.w3.org/TR/webrtc/#rtcicecomponent)
    7.  [5.7`RTCTrackEvent`](https://www.w3.org/TR/webrtc/#rtctrackevent)
6.  [6.Peer-to-peer Data API](https://www.w3.org/TR/webrtc/#peer-to-peer-data-api)
    1.  [6.1RTCPeerConnection Interface Extensions](https://www.w3.org/TR/webrtc/#rtcpeerconnection-interface-extensions-0)
        1.  [6.1.1`RTCSctpTransport` Interface](https://www.w3.org/TR/webrtc/#rtcsctptransport-interface)
            1.  [6.1.1.1Create an instance](https://www.w3.org/TR/webrtc/#sctp-transport-create)
            2.  [6.1.1.2Update max message size](https://www.w3.org/TR/webrtc/#sctp-transport-update-mms)
            3.  [6.1.1.3Connected procedure](https://www.w3.org/TR/webrtc/#sctp-transport-connected)
        2.  [6.1.2`RTCSctpTransportState` Enum](https://www.w3.org/TR/webrtc/#rtcsctptransportstate)
    2.  [6.2`RTCDataChannel`](https://www.w3.org/TR/webrtc/#rtcdatachannel)
        1.  [6.2.1Creating a data channel](https://www.w3.org/TR/webrtc/#creating-a-data-channel)
        2.  [6.2.2Announcing a data channel as open](https://www.w3.org/TR/webrtc/#announcing-a-data-channel-as-open)
        3.  [6.2.3Announcing a data channel instance](https://www.w3.org/TR/webrtc/#announcing-a-data-channel-instance)
        4.  [6.2.4Closing procedure](https://www.w3.org/TR/webrtc/#closing-procedure)
        5.  [6.2.5Announcing a data channel as closed](https://www.w3.org/TR/webrtc/#announcing-a-data-channel-as-closed)
        6.  [6.2.6Error on creating data channels](https://www.w3.org/TR/webrtc/#error-on-creating-data-channels)
        7.  [6.2.7Receiving messages on a data channel](https://www.w3.org/TR/webrtc/#receiving-messages-on-a-data-channel)
    3.  [6.3`RTCDataChannelEvent`](https://www.w3.org/TR/webrtc/#rtcdatachannelevent)
    4.  [6.4Garbage Collection](https://www.w3.org/TR/webrtc/#garbage-collection-0)
7.  [7.Peer-to-peer DTMF](https://www.w3.org/TR/webrtc/#peer-to-peer-dtmf)
    1.  [7.1RTCRtpSender Interface Extensions](https://www.w3.org/TR/webrtc/#rtcrtpsender-interface-extensions)
    2.  [7.2`RTCDTMFSender`](https://www.w3.org/TR/webrtc/#rtcdtmfsender)
    3.  [7.3canInsertDTMF algorithm](https://www.w3.org/TR/webrtc/#caninsertdtmf-algorithm)
    4.  [7.4`RTCDTMFToneChangeEvent`](https://www.w3.org/TR/webrtc/#rtcdtmftonechangeevent)
8.  [8.Statistics Model](https://www.w3.org/TR/webrtc/#sec.stats-model)
    1.  [8.1Introduction](https://www.w3.org/TR/webrtc/#introduction-0)
    2.  [8.2RTCPeerConnection Interface Extensions](https://www.w3.org/TR/webrtc/#rtcpeerconnection-interface-extensions-1)
    3.  [8.3`RTCStatsReport` Object](https://www.w3.org/TR/webrtc/#rtcstatsreport-object)
    4.  [8.4`RTCStats` Dictionary](https://www.w3.org/TR/webrtc/#rtcstats-dictionary)
    5.  [8.5The stats selection algorithm](https://www.w3.org/TR/webrtc/#the-stats-selection-algorithm)
    6.  [8.6Mandatory To Implement Stats](https://www.w3.org/TR/webrtc/#mandatory-to-implement-stats)
    7.  [8.7GetStats Example](https://www.w3.org/TR/webrtc/#getstats-example)
9.  [9.Media Stream API Extensions for Network Use](https://www.w3.org/TR/webrtc/#media-stream-api-extensions-for-network-use)
    1.  [9.1Introduction](https://www.w3.org/TR/webrtc/#introduction-1)
    2.  [9.2MediaStream](https://www.w3.org/TR/webrtc/#mediastream-network-use)
        1.  [9.2.1id](https://www.w3.org/TR/webrtc/#id)
    3.  [9.3MediaStreamTrack](https://www.w3.org/TR/webrtc/#mediastreamtrack-network-use)
        1.  [9.3.1MediaTrackSupportedConstraints, MediaTrackCapabilities, MediaTrackConstraints and MediaTrackSettings](https://www.w3.org/TR/webrtc/#mediatracksupportedconstraints-mediatrackcapabilities-mediatrackconstraints-and-mediatracksettings)
10. [10.Examples and Call Flows](https://www.w3.org/TR/webrtc/#examples-and-call-flows)
11. [10.1Simple Peer-to-peer Example](https://www.w3.org/TR/webrtc/#simple-peer-to-peer-example)
12. [10.2Advanced Peer-to-peer Example with Warm-up](https://www.w3.org/TR/webrtc/#advanced-peer-to-peer-example-with-warm-up)
13. [10.3Simulcast Example](https://www.w3.org/TR/webrtc/#simulcast-example)
14. [10.4Peer-to-peer Data Example](https://www.w3.org/TR/webrtc/#peer-to-peer-data-example)
15. [10.5Call Flow Browser to Browser](https://www.w3.org/TR/webrtc/#call-flow-browser-to-browser)
16. [10.6DTMF Example](https://www.w3.org/TR/webrtc/#dtmf-example)
17. [10.7Perfect Negotiation Example](https://www.w3.org/TR/webrtc/#perfect-negotiation-example)

18. [11.Error Handling](https://www.w3.org/TR/webrtc/#error-handling-0)
19. [11.1 `RTCError` Interface](https://www.w3.org/TR/webrtc/#rtcerror-interface)
    1.  [11.1.1Constructors](https://www.w3.org/TR/webrtc/#constructors)
    2.  [11.1.2Attributes](https://www.w3.org/TR/webrtc/#attributes)
20. [11.2`RTCErrorDetailType` Enum](https://www.w3.org/TR/webrtc/#rtcerrordetailtype-enum)
21. [11.3`RTCErrorEvent` Interface](https://www.w3.org/TR/webrtc/#rtcerrorevent-interface)
    1.  [11.3.1Constructors](https://www.w3.org/TR/webrtc/#constructors-0)
    2.  [11.3.2Attributes](https://www.w3.org/TR/webrtc/#attributes-0)
22. [11.4`RTCErrorEventInit` Dictionary](https://www.w3.org/TR/webrtc/#rtcerroreventinit-dictionary)
23. [11.4.1Dictionary RTCErrorEventInit Members](https://www.w3.org/TR/webrtc/#dictionary-rtcerroreventinit-members)
24. [12.Event summary](https://www.w3.org/TR/webrtc/#event-summary)
25. [13.Privacy and Security Considerations](https://www.w3.org/TR/webrtc/#privacy-and-security-considerations)
26. [13.1Impact on same origin policy](https://www.w3.org/TR/webrtc/#impact-on-same-origin-policy)
27. [13.2Revealing IP addresses](https://www.w3.org/TR/webrtc/#revealing-ip-addresses)
28. [13.3Impact on local network](https://www.w3.org/TR/webrtc/#impact-on-local-network)
29. [13.4Confidentiality of Communications](https://www.w3.org/TR/webrtc/#confidentiality-of-communications)
30. [13.5Persistent information exposed by WebRTC](https://www.w3.org/TR/webrtc/#persistent-information-exposed-by-webrtc)
31. [13.6Setting SDP from remote endpoints](https://www.w3.org/TR/webrtc/#setting-sdp-from-remote-endpoints)
32. [14.Accessibility Considerations](https://www.w3.org/TR/webrtc/#accessibility-considerations)
33. [A.Acknowledgements](https://www.w3.org/TR/webrtc/#acknowledgements)
34. [B.References](https://www.w3.org/TR/webrtc/#references)
35. [B.1Normative references](https://www.w3.org/TR/webrtc/#normative-references)
36. [B.2Informative references](https://www.w3.org/TR/webrtc/#informative-references)

---

## MDN Web Docs

- [RTCAnswerOptions](https://developer.mozilla.org/en-US/docs/Web/API/RTCAnswerOptions)  

- [RTCCertificate](https://developer.mozilla.org/en-US/docs/Web/API/RTCCertificate)  

- [RTCConfiguration](https://developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration)  

- [RTCDTMFSender](https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender)  

- [RTCDTMFToneChangeEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent)  

- [RTCDataChannel](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel)
- [RTCDataChannelEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannelEvent)
- [RTCDtlsTransport](https://developer.mozilla.org/en-US/docs/Web/API/RTCDtlsTransport)
- [RTCError](https://developer.mozilla.org/en-US/docs/Web/API/RTCError)  

- [RTCErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCErrorEvent)  

- [RTCIceCandidate](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate)  

- [RTCIceCandidateInit](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateInit)  

- [RTCIceCandidatePair](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePair)  

- [RTCIceCandidatePairStats](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats)  

- [RTCIceCandidateStats](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats)  

- [RTCIceCandidateType](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateType)  

- [RTCIceComponent](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceComponent)  

- [RTCIceCredentialType](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCredentialType)  

- [RTCIceGathererState](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceGathererState)  

- [RTCIceParameters](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceParameters)  

- [RTCIceProtocol](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceProtocol)  

- [RTCIceRole](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceRole)  

- [RTCIceServer](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer)
- [RTCIceTcpCandidateType](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTcpCandidateType)  

- [RTCIceTransport](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport)  

- [RTCIceTransportState](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransportState)  

- [RTCIdentityAssertion](https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityAssertion)
- [RTCIdentityErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityErrorEvent)
- [RTCIdentityEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityEvent)
- [RTCInboundRtpStreamStats](https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats)  

- [RTCNetworkType](https://developer.mozilla.org/en-US/docs/Web/API/RTCNetworkType)  

- [RTCOfferAnswerOptions](https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferAnswerOptions)  

- [RTCOfferOptions](https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferOptions)  

- [RTCOutboundRtpStreamStats](https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats)  

- [RTCPeerConnection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)  

- [RTCPeerConnectionIceErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceErrorEvent)  

- [RTCPeerConnectionIceEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceEvent)
- [RTCRemoteOutboundRtpStreamStats](https://developer.mozilla.org/en-US/docs/Web/API/RTCRemoteOutboundRtpStreamStats)  

- [RTCRtcpParameters](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtcpParameters)  

- [RTCRtpCapabilities](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCapabilities)  

- [RTCRtpCodecCapability](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCodecCapability)  

- [RTCRtpCodecParameters](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpCodecParameters)  

- [RTCRtpContributingSource](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource)  

- [RTCRtpEncodingParameters](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters)  

- [RTCRtpParameters](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpParameters)  

- [RTCRtpReceiveParameters](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiveParameters)  

- [RTCRtpReceiver](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver)  

- [RTCRtpSendParameters](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSendParameters)  

- [RTCRtpSender](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender)  

- [RTCRtpStreamStats](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats)  

- [RTCRtpSynchronizationSource](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSynchronizationSource)  

- [RTCRtpTransceiver](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver)  

- [RTCRtpTransceiverDirection](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiverDirection)  

- [RTCRtpTransceiverInit](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiverInit)  

- [RTCSctpTransport](https://developer.mozilla.org/en-US/docs/Web/API/RTCSctpTransport)
- [RTCSessionDescription](https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription)
- [RTCSessionDescriptionCallback](https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescriptionCallback)
- [RTCStats](https://developer.mozilla.org/en-US/docs/Web/API/RTCStats)  

- [RTCStatsIceCandidatePairState](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsIceCandidatePairState)  

- [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport)  

- [RTCStatsType](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsType)  

- [RTCTrackEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent)  

- [RTCTrackEventInit](https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit)

## Comando usados para geração de features até agora

## Peer

### Core

```sh

nx generate @nrwl/workspace:library --name=core --directory=peer --importPath=@freecom/peer-core
```

### PeerClient

```
nx generate @nrwl/angular:library --name=client --style=scss --directory=peer --buildable --importPath=@freecom/peer-client --linter=eslint --prefix=peer --publishable --tags=side:client,type:feature --no-interactive

```

### Player

```
nx generate @nrwl/angular:library --name=player --style=scss --directory=peer --buildable --importPath=@freecom/peer-player --linter=eslint --prefix=peer --publishable --tags=side:client,type:feature,scope:peer --no-interactive

```

### Peer Phone

```sh
nx generate @nrwl/angular:library --name=phone --style=scss --directory=peer --buildable --importPath=@freecom/peer-phone --prefix=peer --publishable --tags=side:client,type:feat,scope:peer --no-interactive --dry-run
```

### Peer Meeting

```
nx generate @nrwl/angular:library --name=meeting --style=scss --directory=peer --buildable --importPath=@freecom/meeting --linter=eslint --prefix=peer --publishable --tags=side:client,type:feat,scope:peer
```

# PeerClient, docs & samples

```
nx generate @nrwl/angular:application --name=peer-client --style=scss --directory=docs/samples --linter=eslint --prefix=sample --routing --tags=side:client,type:app --no-interactive

```

# Signaling, docs & samples

```
nx generate @nrwl/nest:application --name=signaling --directory=docs/samples --frontendProject=docs-samples-peer-client --tags=side:server,type:app --no-interactive
```

## Signaling

```
nx generate @nrwl/nest:library --name=signaling --buildable --importPath=@freecom/signaling --publishable --tags=side:server,type:feature --target=es2019 --no-interactive
```

# API Gateway

```
nx generate @nrwl/nest:application --name=gateway --directory=api --tags=side:server,type:app,scope:api --no-interactive

```

## Api Gateway User

```
nx generate @nestjs/schematics:resource --name=users --sourceRoot=apps/api/gateway/src --type=ws --no-interactive

```

### Class validator & class transformer

```
npm i --save class-validator class-transformer

```

### NestJS Config

```
npm i --save @nestjs/config

```

### NestJS Mapped types

```
npm i --save @nestjs/mapped-types
```

### Mongoose

```
npm install --save @nestjs/mongoose mongoose
```

# Core

## Core entities

```sh
nx generate @nrwl/workspace:library --name=entities --directory=core --importPath=@freecom/core-entities --tags=type:util,scope:core --no-interactive
```
